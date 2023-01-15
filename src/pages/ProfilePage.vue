<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg">
      <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12">
        <q-card
          class="card-bg text-black q-pa-lg"
          style="width: 100%; height: 100%"
        >
          <q-card-section class="text-center bg-transparent">
            <div class="user-image">
              <img v-bind:src="userArray.img_url" :alt="userArray.name" />
            </div>

            <div class="text-h4">
              {{ userArray.name }} {{ userArray.subname }}
            </div>
          </q-card-section>
          <div class="text-h5 q-pb-md text-center">
            <q-icon name="mail" />
            {{ userArray.email }}
          </div>
          <div class="text-h5 q-pb-md text-center">
            <q-icon name="call" />
            {{ userArray.phone }}
          </div>

          <div class="text-h5 q-pb-md text-center">
            <q-icon name="location_on" />
            {{ userArray.direction }}, {{ userArray.city }} - {{ userArray.cp }}
          </div>
          <q-separator color="primary" inset />

          <q-card-section>
            <div class="text-h5 text-center">
              {{ userArray.bio }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-lg-6 col-md-8 col-xs-12 col-sm-12">
        <q-card>
          <q-card-section class="q-pa-sm">
            <q-toggle v-model="readonly" label="Editar perfil" dark />
            <q-list class="row">
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    square
                    clearable
                    required
                    v-model="name"
                    type="text"
                    label="Nombre"
                    :readonly="readonly"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    square
                    clearable
                    required
                    type="text"
                    label="Apellidos"
                    v-model="subname"
                    :readonly="readonly"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    square
                    required
                    type="tel"
                    mask="6## - ## - ## - ##"
                    label="Teléfono"
                    :readonly="readonly"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    square
                    clearable
                    required
                    label="Dirección"
                    v-model="direction"
                    :readonly="readonly"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    square
                    clearable
                    required
                    label="Ciudad"
                    v-model="city"
                    :readonly="readonly"
                  />
                </q-item-section>
              </q-item>

              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    square
                    clearable
                    required
                    label="Código Postal"
                    v-model="cp"
                    :readonly="readonly"
                  />
                </q-item-section>
              </q-item>

              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="textarea"
                    square
                    clearable
                    required
                    label="Biografía"
                    v-model="bio"
                    autogrow
                    :readonly="readonly"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn @click="updateInfo" color="primary"
              >Actualizar información</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>

      <q-space />

      <div class="col-lg-6 col-md-8 col-xs-12 col-sm-12">
        <q-card class="card-bg text-black">
          <q-card-section class="q-pa-sm">
            <q-toggle
              v-model="readonlyPassword"
              label="Editar contraseña"
              dark
            />
          </q-card-section>
          <q-form @submit="updatePassword">
            <q-card-section class="q-pa-sm row">
              <q-item class="col-lg-12 col-md-8 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="password"
                    square
                    clearable
                    required
                    label="Contraseña actual"
                    v-model="oldPassword"
                    :readonly="readonlyPassword"
                  />
                </q-item-section>
              </q-item>

              <q-item class="col-lg-12 col-md-8 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="password"
                    square
                    clearable
                    required
                    label="Nueva contraseña"
                    v-model="newPassword"
                    :readonly="readonlyPassword"
                  />
                </q-item-section>
              </q-item>

              <q-item class="col-lg-12 col-md-8 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="password"
                    square
                    clearable
                    required
                    v-model="newPassword"
                    label="Confirmar nueva contraseña"
                    :readonly="readonlyPassword"
                  />
                </q-item-section>
              </q-item>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn type="submit" color="primary">Modificar contraseña</q-btn>
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="alertPositive">
      <q-card>
        <q-card-section>
          <div class="text-h6">Modificar contraseña</div>
        </q-card-section>

        <q-card-section>Contraseña modificada con éxito</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="white" to="/" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="alertNegative">
      <q-card>
        <q-card-section>
          <div class="text-h6">Modificar contraseña</div>
        </q-card-section>

        <q-card-section>
          Vuelve a iniciar sesión para modificar la contraseña
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>

  <q-dialog v-model="alertUpdate">
    <q-card>
      <q-card-section>
        <div class="text-h6">Actualizar perfil</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Perfil actualizado con éxito
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="white" v-close-popup to="/panelcontrol" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import {
  getAuth,
  onAuthStateChanged,
  updatePassword,
  signOut,
} from "firebase/auth";
import { defineComponent } from "vue";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import db from "../boot/db";

export default defineComponent({
  data() {
    return {
      userArray: [],
      showModal: false,
      name: "",
      userState: "",
      subname: "",
      phone: "",
      direction: "",
      city: "",
      cp: "",
      bio: "",
      img_url: null,
      newPassword: "",
      oldPassword: "",
      alertPositive: false,
      alertNegative: false,
      alertUpdate: false,
      readonly: true,
      readonlyPassword: true,
    };
  },

  //Funció per recuperar l'usuari que ha iniciat sessió
  async created() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      //Funció per recuperar la informació de l'usuari que ha iniciat sessió
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      try {
        if (docSnap.exists()) {
          const userInfo = docSnap.data();
          this.userArray = userInfo;
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Usuario no logeado");
    }
  },

  methods: {
    //Funció per actualitzar la informació de l'usuari
    async updateInfo() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;

          const profile = doc(db, "users", user.uid);

          const object = {
            name: this.name,
            subname: this.subname,
            phone: this.phone,
            direction: this.direction,
            city: this.city,
            cp: this.cp,
            bio: this.bio,
          };
          let updateInfo = Object.fromEntries(
            Object.entries(object).filter(([_, v]) => v != "")
          );
          //Funció per actualitzar aquells valors que s'han introduït
          //Els valors que no s'han introduït no se sobreescriuen
          updateDoc(profile, updateInfo, { merge: true });
          this.alertUpdate = true;
        } else {
          console.log("error");
        }
      });
    },

    async updatePassword() {
      //Funció per actualitzar el password de l'usuari
      const auth = getAuth();
      const user = auth.currentUser;
      const newPassword = this.newPassword;

      updatePassword(user, newPassword)
        .then(() => {
          this.alertPositive = true;
          //Funció per tancar la sessió de l'usuari
          //Quan s'actualitza el password es tanca la sessió de l'usuari
          signOut(auth)
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          //Si no es pot actualitzar la password s'envia un missatge
          //Aquest missatge indica a l'usuari que torni a iniciar sessió per modificar el password
          this.alertNegative = true;
          console.log(error);
        });
    },
  },
});
</script>

<style>
.user-image img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
