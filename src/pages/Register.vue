<template>
  <q-page>
    <q-card-section class="q-pa-none">
      <div class="contact-box-register">
        <div class="contact-links-register">
          <h2 class="text-h2 text-center text-white">REGISTRARSE</h2>
          <div class="links q-gutter-xl">
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
              href="https://www.instagram.com/_tortiillas_/"
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
        <div class="contact-form-wrapper-register">
          <q-form class="q-gutter-md" @submit="register">
            <div class="form-item">
              <q-input
                square
                clearable
                required
                v-model="name"
                type="text"
                lazy-rules
                :rules="[(val) => val.length > 0 || 'Campo obligatorio']"
                label="Nombre"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </div>
            <div class="form-item">
              <q-input
                square
                required
                clearable
                v-model="subname"
                type="text"
                lazy-rules
                :rules="[(val) => val.length > 0 || 'Campo obligatorio']"
                label="Apellidos"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </div>

            <div class="form-item">
              <q-input
                square
                clearable
                required
                v-model="phone"
                type="tel"
                lazy-rules
                mask="6## - ## - ## - ##"
                label="Telefono"
                :rules="[(val) => val.length >= 18 || 'Telefono no valido']"
              >
                <template v-slot:prepend>
                  <q-icon name="call" />
                </template>
              </q-input>
            </div>

            <div class="form-item">
              <q-input
                square
                required
                clearable
                v-model="direction"
                type="text"
                lazy-rules
                :rules="[(val) => val.length > 0 || 'Campo obligatorio']"
                label="Dirección"
              >
                <template v-slot:prepend>
                  <q-icon name="home" />
                </template>
              </q-input>
            </div>

            <div class="row justify-between">
              <div class="form-item">
                <q-input
                  square
                  clearable
                  required
                  v-model="city"
                  type="text"
                  lazy-rules
                  :rules="[(val) => val.length > 0 || 'Campo obligatorio']"
                  label="Ciudad"
                >
                  <template v-slot:prepend>
                    <q-icon name="location_on" />
                  </template>
                </q-input>
              </div>

              <div class="form-item">
                <q-input
                  square
                  clearable
                  required
                  v-model="cp"
                  type="number"
                  lazy-rules
                  :rules="[
                    (val) => val.length === 5 || 'Codigo postal no valido',
                  ]"
                  label="Codigo Postal"
                >
                  <template v-slot:prepend>
                    <q-icon name="map" />
                  </template>
                </q-input>
              </div>
            </div>

            <div class="form-item">
              <q-input
                square
                clearable
                required
                v-model="textarea"
                autogrow
                type="textarea"
                :rules="[(val) => val.length > 0 || 'Campo obligatorio']"
                label="Porque quieres adoptar?"
                lazy-rules
              >
              </q-input>
            </div>

            <div class="form-item">
              <q-input
                square
                clearable
                required
                v-model="email"
                type="email"
                lazy-rules
                :rules="[
                  (val, rules) => rules.email(val) || 'Email incorrecto',
                ]"
                label="Email"
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
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
              <q-btn label="Registrarse" type="submit" color="primary" />
            </div>
          </q-form>
        </div>
      </div>
    </q-card-section>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import db from "../boot/db";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const email = ref("");
    const password = ref("");
    const name = ref("");
    const subname = ref("");
    const phone = ref("");
    const textarea = ref("");
    const direction = ref("");
    const city = ref("");
    const cp = ref("");
    const password_validate = ref("");
    const error = ref(null);
    const router = useRouter();
    const isPwd = ref(true);

    return {
      email,
      password,
      error,
      name,
      phone,
      subname,
      direction,
      city,
      cp,
      textarea,
      password_validate,
      isPwd,

      async register() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;

            try {
              const docRef = setDoc(doc(db, "users", userCredential.user.uid), {
                name: name.value,
                subname: subname.value,
                phone: phone.value,
                email: userCredential.user.email,
                direction: direction.value,
                city: city.value,
                cp: cp.value,
                bio: textarea.value,
              });
            } catch (error) {
              console.log(error);
            }
            setTimeout(() => router.push({ path: "/" }), 2000);

            $q.notify({
              message: "Registro completado",
              type: "positive",
            });
          })
          .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                error.message = "Correo eletronico incorrecto";
                break;
              case "auth/weak-password":
                error.message = "Contraseña debil";
                break;
              case "auth/email-already-in-use":
                error.message = "Correo eletronico en uso";
                break;
              case "auth/admin-restricted-operation":
                error.message = "Faltan campos por rellenar";
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
