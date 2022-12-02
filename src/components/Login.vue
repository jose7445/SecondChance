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
            <q-btn label="ENVIAR" @click="login" color="primary" />
          </div>
        </q-form>
        <div class="q-pt-lg row justify-between">
          <div>¿Olvidaste la clave?</div>
          <router-link to="registrarse">Registrarse</router-link>
        </div>
      </div>
    </div>
  </q-card-section>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const router = useRouter();
    const isPwd = ref(true);

    return {
      email,
      password,
      error,
      isPwd,

      async login() {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            $q.notify({
              message: "Sesión iniciada",
              type: "positive",
            });
            setTimeout(() => location.reload(), 1000);
          })
          .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/user-not-found":
                error.message = "Usuario no encontrado";
                break;
              case "auth/wrong-password":
                error.message = "Password incorrecta";
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
