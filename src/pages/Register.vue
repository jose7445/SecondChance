<template>
  <q-page>
    <q-card-section class="q-pa-none">
      <div class="contact-box-register">
        <div class="contact-links-register">
          <h2 class="text-h2 text-center text-white">REGISTRARSE</h2>
        </div>
        <div class="contact-form-wrapper-register">
          <q-form class="q-gutter-lg" @submit="register">
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
                label="Teléfono"
                placeholder="El número 6 del inicio se introduce automáticamente"
                :rules="[(val) => val.length >= 18 || 'Teléfono no válido']"
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
                    (val) => val.length === 5 || 'Código postal no válido',
                  ]"
                  label="Código Postal"
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
                label="¿Porque quieres adoptar?"
                lazy-rules
              >
              </q-input>
            </div>

            <div class="form-item">
              <q-file
                v-model="image_url"
                label="Subir una imagen de perfil"
                square
                clearable
                required
                accept=".jpg, image/*"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
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
                :rules="[(val) => val.length > 6 || 'Mínimo 6 caracteres']"
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
import {
  getStorage,
  uploadBytes,
  getDownloadURL,
  ref as firebaseStorageRef,
} from "firebase/storage";
import db from "../boot/db";
import { useRouter } from "vue-router";
import { useMeta } from "quasar";

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
    const image_url = ref(null);
    const password_validate = ref("");
    const error = ref(null);
    const router = useRouter();
    const isPwd = ref(true);
    const title = ref("SecondChance | Registro");

    //Plugin Loading
    //Funció per mostrar una pantalla de "carrega"
    useMeta(() => {
      return {
        title: title.value,
      };
    });

    //Funció per enviar la imatge a la base de dades Firebase i a l'album users/
    function photo() {
      const storage = getStorage();
      const photoRef = firebaseStorageRef(
        storage,
        "users/" + image_url.value.name
      );
      return uploadBytes(photoRef, image_url.value).then(() =>
        getDownloadURL(photoRef)
      );
    }

    return {
      photo,
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
      image_url,
      password_validate,
      isPwd,

      //Funció per enviar les dades del usuari a Firebase
      async register() {
        const auth = getAuth();

        //Variable per captura l'url de la imatge
        //Aquesta variable s'envia juntament amb la resta d'informació del usuari
        let url = await photo();
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;

            //Les diferents dades que s'envien al nou document de Firebase "users"
            try {
              const docRef = setDoc(doc(db, "users", userCredential.user.uid), {
                name: name.value,
                subname: subname.value,
                phone: phone.value,
                email: userCredential.user.email,
                direction: direction.value,
                city: city.value,
                cp: cp.value,
                img_url: url,
                bio: textarea.value,
              });
            } catch (error) {
              console.log(error);
            }
            setTimeout(() => router.push({ path: "/" }), 2000);

            //Funció per mostra missatge si l'usuari s'ha registrat correctament
            $q.notify({
              message: "Registro completado",
              type: "positive",
            });
          })
          //Funció per mostra missatge si l'usuari no s'ha registrat correctament
          .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                error.message = "Correo electrónico  incorrecto";
                break;
              case "auth/weak-password":
                error.message = "Contraseña débil";
                break;
              case "auth/email-already-in-use":
                error.message = "Correo electrónico en uso";
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
