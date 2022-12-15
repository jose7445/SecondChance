<template>
  <q-card-section class="q-pa-none">
    <div class="contact-box">
      <div class="contact-links">
        <h2 class="text-h2 text-center text-white">INICIAR SESIÓN</h2>
        <div class="links q-gutter-lg">
          <q-btn
            round
            color="green"
            size="20px"
            icon="mdi-facebook"
            href="https://www.facebook.com/joseluis.agudosabate/"
            aria-label="Facebook"
          />
          <q-btn
            round
            color="green"
            size="20px"
            icon="mdi-instagram"
            href="https://www.facebook.com/"
            aria-label="Instagram"
          />
          <q-btn
            round
            color="green"
            size="20px"
            icon="mdi-linkedin"
            href="https://www.linkedin.com/in/jose-agudo-sabate-bb1041137"
            aria-label="Linkedin"
          />
        </div>
      </div>
      <div class="contact-form-wrapper">
        <q-form class="q-gutter-md">
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
              :rules="[(val) => val.length > 6 || 'Minimo 6 caracteres']"
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
          <div class="text-center inherit">
            <q-btn
              type="submit"
              label="ENVIAR"
              @click="login"
              color="primary"
            />
          </div>
        </q-form>

        <!-- Button password remember-->
        <div class="q-pt-lg row justify-between">
          <q-btn flat @click="prompt = true">¿Olvidaste la clave?</q-btn>
          <router-link to="registrarse">Registrarse</router-link>
        </div>
      </div>
    </div>
  </q-card-section>

  <!-- Modal password remember -->
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Introduzca su correo eletronico</div>
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
import { ref } from "vue";
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

    return {
      email,
      password,
      error,
      isPwd,
      prompt: ref(false),
      address,

      async login() {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;

            $q.notify({
              message: "Sesión iniciada",
              type: "positive",
            });
            setTimeout(() => location.reload(), 2000);
          })
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
                error.message = "Correo eletronico obligatorio";
                break;
              case "auth/internal-error":
                error.message = "Contraseña obligatoria";
                break;
              case "auth/too-many-requests":
                error.message =
                  "Demasiados intentos. Vuelve a intentarlo mas tarde";
                break;
            }
            $q.notify({
              message: error.message,
              type: "negative",
            });
          });
      },

      async resetPassword() {
        const auth = getAuth();

        sendPasswordResetEmail(auth, address.value)
          .then(() => {
            $q.notify({
              message: "Revise su correo eletronico",
              type: "positive",
            });
            setTimeout(() => router.push({ path: "/" }), 2000);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (error.code) {
              case "auth/invalid-email":
                error.message = "Correo eletronico incorrecto";
                break;
              case "auth/user-not-found":
                error.message = "Correo eletronico no encontrado";
                break;
              case "auth/missing-email":
                error.message = "Correo eletronico obligatorio";
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
