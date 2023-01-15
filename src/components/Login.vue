<template>
  <q-card-section class="q-pa-none">
    <div class="contact-box">
      <div class="contact-links row items-center justify-center">
        <h2 class="text-h2 text-center text-white">INICIAR SESIÓN</h2>
      </div>
      <div class="contact-form-wrapper">
        <q-form @submit="login">
          <div class="form-item">
            <q-input
              square
              clearable
              required
              v-model="email"
              type="email"
              lazy-rules
              :rules="[(val, rules) => rules.email(val) || 'Email incorrecto']"
              label="Email"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
          </div>
          <div class="form-item">
            <q-input
              square
              clearable
              required
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              label="Password"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
            </q-input>
          </div>
          <div class="text-center inherit q-pt-lg">
            <q-btn type="submit" label="ENVIAR" color="primary" />
          </div>
        </q-form>

        <!-- Button password remember-->
        <div class="q-pt-lg row justify-between items-center forget">
          <q-btn flat @click="prompt = true" class="button-forget"
            >¿Olvidaste la clave?</q-btn
          >
          <router-link to="/registrarse">
            <div class="text-weight-medium">Registrarse</div>
          </router-link>
        </div>
      </div>
    </div>
  </q-card-section>

  <!-- Modal password remember -->
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Introduzca su correo electrónico</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="address"
          autofocus
          @keyup.enter="prompt = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn
          @click="resetPassword"
          flat
          label="Enviar información"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useMeta } from "quasar";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export default {
  setup() {
    const $q = useQuasar();
    const email = ref("");
    const address = ref("");
    const password = ref("");
    const error = ref(null);
    const isPwd = ref(true);
    const router = useRouter();

    //Plugin Meta
    //Modifica el títol de la pàgina
    //Millora el SEO del lloc web
    const title = ref("SecondChance | Iniciar sesión");
    useMeta(() => {
      return {
        title: title.value,
      };
    });
    return {
      email,
      password,
      error,
      isPwd,
      prompt: ref(false),
      address,
      router,

      //Funció per iniciar sessió
      async login() {
        const auth = getAuth();

        await signInWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;
            $q.notify({
              message: "Sesión iniciada",
              type: "positive",
            });
          })

          //Funció per generar erros a l'hora d'iniciar sessió
          .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/user-not-found":
                error.message = "Usuario no encontrado";
                break;
              case "auth/wrong-password":
                error.message = "Contraseña incorrecta";
                break;
              case "auth/missing-email":
                error.message = "Correo electrónico obligatorio";
                break;
              case "auth/internal-error":
                error.message = "Contraseña obligatoria";
                break;
              case "auth/too-many-requests":
                error.message =
                  "Demasiados intentos. Vuelve a intentarlo más tarde";
                break;
            }
            $q.notify({
              message: error.message,
              type: "negative",
            });
          });
      },

      //Funció per generar un nou password
      //S'envia un correu electrònic  per poder generar un nou password
      async resetPassword() {
        const auth = getAuth();

        sendPasswordResetEmail(auth, address.value)
          .then(() => {
            $q.notify({
              message: "Revise su correo electrónico",
              type: "positive",
            });
          })
          //Funció per generar erros a l'hora de generar un nou password

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (error.code) {
              case "auth/invalid-email":
                error.message = "Correo electrónico incorrecto";
                break;
              case "auth/user-not-found":
                error.message = "Correo electrónico no encontrado";
                break;
              case "auth/missing-email":
                error.message = "Correo electrónico obligatorio";
                break;
            }
            $q.notify({
              message: error.message,
              type: "negative",
            });
          });
      },
    };
  },
};
</script>

<style>
.button-forget {
  background-color: transparent;
  color: #79d671;
  font-weight: 300;
  text-transform: none;
  font-size: 16px;
}

@media (max-width: 480px) {
  .forget {
    flex-direction: column-reverse;
  }
}
</style>
