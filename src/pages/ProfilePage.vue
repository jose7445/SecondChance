<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-md">
      <div class="col-lg-6 col-md-4 col-xs-12 col-sm-12">
        <q-card class="card-bg text-black">
          <q-card-section class="text-center bg-transparent">
            <q-avatar size="100px">
              <img
                class="pet-image"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </q-avatar>
            <div class="text-h4 q-mt-md">
              {{ userArray.name }} {{ userArray.subname }}
            </div>
          </q-card-section>
          <div class="text-h5 q-pb-md text-center">
            <q-icon name="mail" />
            {{ userArray.email }}
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
            <q-list class="row">
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-toggle v-model="readonly" label="Modificar perfil" />
              </q-item>

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
                    label="Telefono"
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
                    label="Direccion"
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
                    label="Codigo Postal"
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
                    label="Biografia"
                    v-model="bio"
                    :readonly="readonly"
                    autogrow
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
          <q-card-section class="text-h6 q-pa-sm">
            <div class="text-h6">Modificar contraseña</div>
          </q-card-section>
          <q-form @submit="updatePassword">
            <q-card-section class="q-pa-sm row">
              <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="password"
                    square
                    clearable
                    required
                    label="Contraseña actual"
                    v-model="oldPassword"
                  />
                </q-item-section>
              </q-item>

              <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="password"
                    square
                    clearable
                    required
                    label="Nueva contraseña"
                    v-model="newPassword"
                  />
                </q-item-section>
              </q-item>

              <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    type="password"
                    square
                    clearable
                    required
                    v-model="newPassword"
                    label="Confirmar nueva contraseña"
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

        <q-card-section class="q-pt-none">
          Contraseña modificada con exito
        </q-card-section>

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

        <q-card-section class="q-pt-none">
          Vuelve a inicar sesion para modificar la contraseña
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
        Perfil actualizado con exito
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
      readonly: true,
      newPassword: "",
      oldPassword: "",
      alertPositive: false,
      alertNegative: false,
      alertUpdate: false,
    };
  },

  // onAuthStateChanged(auth, (user) => {})
  async created() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log(this.userState);

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
          updateDoc(profile, updateInfo, { merge: true });
          this.alertUpdate = true;
        } else {
          console.log("error");
        }
      });
    },

    async updatePassword() {
      const auth = getAuth();

      const user = auth.currentUser;
      const newPassword = this.newPassword;

      updatePassword(user, newPassword)
        .then(() => {
          this.alertPositive = true;
          signOut(auth)
            .then(() => {})
            .catch((error) => {
              // An error happened.
            });
        })
        .catch((error) => {
          this.alertNegative = true;
          console.log(error);
        });
    },
  },
});
</script>
