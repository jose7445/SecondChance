<template>
  <main v-if="pets" class="page-details">
    <section class="pet-attributes">
      <div class="container">
        <div class="row items">
          <div class="col-md-5">
            <!-- Pet img -->
            <div class="detail-header">
              <img
                class="pet-image"
                v-bind:src="pets.image_url"
                :alt="pets.name"
              />
            </div>
          </div>
          <!-- Pet info -->
          <div class="q-pa-xl information">
            <div class="text-h2">
              {{ pets.name }}
              <span class="span-title"
                >{{ pets.age }} años, {{ pets.location }}</span
              >
            </div>
            <div class="main-details">
              <ul class="q-pt-md q-pl-none q-ma-none">
                <li>
                  <strong>Especie</strong> <span>{{ pets.species }}</span>
                </li>
                <li>
                  <strong>Raza</strong> <span>{{ pets.race }}</span>
                </li>
                <li>
                  <strong>Sexo</strong><span>{{ pets.sex }}</span>
                </li>
                <li>
                  <strong>Medida</strong><span>{{ pets.size }}</span>
                </li>
              </ul>
              <div class="pet-buttons">
                <div class="text-center q-gutter-xl q-pt-md">
                  <q-btn
                    aria-label="Adoptar"
                    icon-right="mdi-hand-heart"
                    label="Adoptar"
                    @click="medium = true"
                  />
                  <q-btn
                    aria-label="Guardar"
                    icon-right="mdi-heart-multiple"
                    label="Guardar en favoritos"
                    @click="savePet"
                    v-if="isLoged && !actualPet"
                  />
                  <q-btn
                    v-if="actualPet"
                    aria-label="Guardar"
                    icon-right="mdi-delete"
                    label="Borrar de
                  favoritos"
                    @click="remove"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pet history -->
        <div class="pet-history q-pa-lg bg-grey-1">
          <div class="text-h4 q-pb-md">Mi historia</div>
          <p>{{ pets.bio }}</p>
        </div>
        <div class="row justify-between pet-information">
          <div class="pet-personality col-md-6 col-lg-4 mb-5 q-pa-lg">
            <!-- Pet personality -->
            <div class="text-h4">Mi personalidad</div>
            <ul
              class="row q-gutter-x-md q-gutter-y-md q-pl-none q-pt-lg personality"
            >
              <li v-for="item in pets.personality" :key="item">{{ item }}</li>
            </ul>
          </div>

          <!-- Pet status -->
          <div class="col-md-6 col-lg-4 mb-5 pet-handle q-pa-lg">
            <div class="text-h4">Me entregan</div>
            <ul class="q-pa-none">
              <li>
                <strong>Vacunado</strong
                ><span class="yes" v-if="pets.handle_status?.vaccinated"
                  >Sí</span
                ><span v-else>No</span>
              </li>
              <li>
                <strong>Desparasitado</strong
                ><span class="yes" v-if="pets.handle_status?.dewormed">Sí</span
                ><span v-else>No</span>
              </li>
              <li>
                <strong>Esterelizado</strong
                ><span class="yes" v-if="pets.handle_status?.sterilized"
                  >Sí</span
                ><span v-else>No</span>
              </li>
              <li>
                <strong>Microchip</strong
                ><span class="yes" v-if="pets.handle_status?.microchip">Sí</span
                ><span v-else>No</span>
              </li>
            </ul>
          </div>

          <!-- Pet notes -->
          <div
            class="col-md-6 col-lg-4 mb-5 pet-notes q-pa-lg"
            v-if="pets.info_notes?.length > 0"
          >
            <div class="text-h4">Tienes que saber</div>
            <ul class="q-pa-none">
              <li v-for="item in pets.info_notes" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section back -->
    <section class="section-back q-pa-xl bg-white">
      <div class="container">
        <div class="text-center text-h2">
          Quieres seguir buscando tu mascota
          <span class="span-title"> favorita?</span>
          <div class="text-center inherit q-pt-lg">
            <q-btn
              aria-label="Volver"
              icon-right="mdi-arrow-left"
              label="Volver"
              to="/adoptar"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Form  -->
    <q-dialog v-model="medium">
      <q-card class="bg-transparent" style="width: 900px; max-width: 80vw">
        <Form />
      </q-card>
    </q-dialog>

    <!-- Dialog favourites  -->
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Favoritos</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Se ha añadido a <span class="span-title">{{ pets.name }}</span> a tus
          favoritos!
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="white" v-close-popup to="/adoptar" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Dialog remove favourites  -->
    <q-dialog v-model="alertRemove">
      <q-card>
        <q-card-section>
          <div class="text-h6">Favoritos</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Se ha eliminado a <span class="span-title">{{ pets.name }}</span> de
          tus favoritos!
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="white" v-close-popup to="/adoptar" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </main>
</template>

<script>
import { getPetById } from "../boot/db.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  setDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import db from "../boot/db";
import Form from "../components/Form.vue";

export default {
  name: "CardDetail",
  components: { Form },

  data: () => {
    return {
      pets: [],
      favourite: [],
      userArray: [],
      medium: false,
      alert: false,
      isLoged: false,
      actualPet: false,
      alertRemove: false,
    };
  },

  async created() {
    let id = this.$route.params.id;
    if (!isNaN(id)) {
      id = parseInt(id);
    }
    this.pets = await getPetById(id);

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      this.isLoged = true;

      try {
        if (docSnap.exists()) {
          const userInfo = docSnap.data();
          this.userArray = userInfo;

          let arrayObtenido = [];

          arrayObtenido = this.userArray.favourite.map(function (elem) {
            let returnObjeto = {
              id: elem.id,
            };
            return returnObjeto;
          });
          const id = this.$route.params.id;
          const found = arrayObtenido.find((x) => x.id == id);
          if (found) {
            this.actualPet = true;
          }
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
    async savePet() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          this.isLoged = true;
          const cityRef = doc(db, "users", user.uid);
          setDoc(
            cityRef,
            { favourite: arrayUnion(this.pets) },
            { merge: true }
          );
          this.alert = true;

          // ...
        } else {
          console.log(error);
        }
      });
    },

    remove() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          const profile = doc(db, "users", user.uid);

          setDoc(
            profile,
            { favourite: arrayRemove(this.pets) },
            { merge: true }
          );
          this.alertRemove = true;
        } else {
          console.log(error);
        }
      });
    },
  },
};
</script>
