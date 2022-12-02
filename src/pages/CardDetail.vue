<template>
  <q-page>
    <!--BACKGROUND PAGE-->

    <div
      class="img-bg-detail flex-bg"
      style="background-image: `{{pets.img_url}}`}"
    >
      <div class="border-bg text-center container text-h1">
        <span class="span-title">- {{ pets.name }} -</span>
      </div>
    </div>

    <!--/BACKGROUND PAGE-->

    <!--SECTION ONE-->

    <section class="section-three q-mb-xl">
      <div class="title text-center text-h2 q-pa-xl">
        Adopotar nuestras
        <span class="span-title">mascotes</span>
        <p class="q-pt-md">
          ¡Consulta la ficha de los animales en adopción para conocerlos mejor!
        </p>
      </div>
      <div class="container">
        <div class="flex-detail">
          <div class="img-pet">
            <img
              class="pet-image"
              v-bind:src="pets.image_url"
              :alt="pets.name"
            />
          </div>
          <div class="pet-detail bg-white custom-fields">
            <div class="text-h3 q-pb-lg">Caracteristicas:</div>

            <table>
              <tbody>
                <tr>
                  <th>Nombre:</th>
                  <td>{{ pets.name }}</td>
                </tr>
                <tr>
                  <th>Especie:</th>
                  <td>{{ pets.species }}</td>
                </tr>
                <tr>
                  <th>Localización:</th>
                  <td>{{ pets.location }}</td>
                </tr>
                <tr>
                  <th>Sexo:</th>
                  <td>{{ pets.sex }}</td>
                </tr>
                <tr>
                  <th>Raza:</th>
                  <td>{{ pets.race }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="pet-detail bg-white custom-fields q-mt-lg">
            <div class="text-h3 q-pb-lg">Biografia:</div>
            <p>{{ pets.bio }}</p>
          </div>
          <div class="pet-detail bg-white custom-fields q-mt-lg">
            <div class="text-h3 q-pb-lg">Personalidad:</div>
            <p v-for="item in pets.personality" :key="item">- {{ item }}</p>
          </div>
          <div class="pet-detail bg-white custom-fields q-mt-lg">
            <div class="text-h3 q-pb-lg">Estado:</div>
            <div class="pet_status">
              <span
                v-if="pets.handle_status?.vaccinated"
                class="bg-primary q-pa-sm q-mr-xl rounded-borders"
                >Vacunado
              </span>
              <span v-else class="bg-red-4 q-pa-sm q-mr-xl rounded-borders"
                >Vacunado
              </span>

              <span
                v-if="pets.handle_status?.dewormed"
                class="bg-primary q-pa-sm q-mr-xl rounded-borders"
                >Desparasitado
              </span>
              <span v-else class="bg-red-4 q-pa-sm q-mr-xl rounded-borders"
                >Desparasitado
              </span>

              <span
                v-if="pets.handle_status?.sterilized"
                class="bg-primary q-pa-sm q-mr-xl rounded-borders"
                >Esterilizado
              </span>
              <span v-else class="bg-red-4 q-pa-sm q-mr-xl rounded-borders"
                >Esterilizado
              </span>

              <span
                v-if="pets.handle_status?.microchip"
                class="bg-primary q-pa-sm q-mr-xl rounded-borders"
                >Microchip
              </span>
              <span v-else class="bg-red-4 q-pa-sm q-mr-xl rounded-borders"
                >Microchip
              </span>
            </div>
          </div>
          <div
            class="pet-detail bg-white custom-fields q-mt-lg"
            v-if="pets.info_notes?.length > 0"
          >
            <div class="text-h3 q-pb-lg">Información adicional:</div>
            <div>
              <div v-for="info in pets.info_notes" :key="info">
                <p>- {{ info }}</p>
              </div>
            </div>
          </div>
          <div class="pet-detail bg-white custom-fields q-mt-lg">
            <div class="text-h3 q-pb-lg text-center">
              Te gusta <span class="span-title">{{ pets.name }}?</span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
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
                label="Guardar"
                @click="open"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--SECTION THREE-->
    <section class="section-three-about q-pa-xl bg-white">
      <div class="container">
        <div class="text-center text-h2">
          Quieres seguir buscando tu mascota
          <span class="span-title"> favorita?</span>
          <div class="text-center inherit q-pt-xl">
            <q-btn
              aria-label="Volver"
              icon-right="mdi-chevron-right"
              label="Volver"
              to="/adoptar"
            />
          </div>
        </div>
      </div>
    </section>
    <!--SECTION THREE-->
    <!--SECTION ONE-->
    <q-dialog v-model="medium">
      <q-card class="bg-transparent" style="width: 900px; max-width: 80vw">
        <Form />
      </q-card>
    </q-dialog>

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
          <q-btn flat label="OK" color="white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { getPetById } from "../boot/db.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, arrayUnion } from "firebase/firestore";
import db from "../boot/db";
import Form from "../components/Form.vue";

export default {
  name: "CardDetail",
  components: { Form },

  data: () => {
    return {
      pets: [],
      favourite: [],
      medium: false,
      alert: false,
    };
  },

  async created() {
    let id = this.$route.params.id;
    if (!isNaN(id)) {
      id = parseInt(id);
    }
    this.pets = await getPetById(id);
  },
  methods: {
    async open() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          const cityRef = doc(db, "users", user.uid);
          setDoc(
            cityRef,
            { favourite: arrayUnion(this.pets) },
            { merge: true }
          );
          this.alert = true;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    },
  },
};
</script>

<style>
/** <!--BACKGROUND PAGE--> **/
.img-bg-detail {
  min-height: 200px;
}

.border-bg {
  border-top: 2px solid #79d671;
  border-bottom: 2px solid #79d671;
}

@media (max-width: 480px) {
  .img-bg-detail {
    background-image: url("../assets/imagenes/background_about_phone.webp");
    background-position: center;
    background-attachment: scroll;
  }
}

.img-pet img {
  width: 100%;
  height: 750px;
}

@media (max-width: 480px) {
  .img-pet img {
    width: 100%;
    height: 300px;
  }
}

.pet-detail {
  width: 100%;
  padding: 5rem;
}

@media (max-width: 480px) {
  .pet-detail {
    width: 100%;
    padding: 2rem;
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  vertical-align: middle;
  width: 100%;
}

table tbody tr,
table thead tr,
table tfoot tr {
  border: 1px solid #f2f2f2;
}

table tbody th,
table tfoot th {
  border-right: 1px solid #f2f2f2;
}

table td,
table th {
  padding: 5px 10px;
  text-align: center;
}

.custom-fields th,
.custom-fields td {
  text-align: left;
}

@media (max-width: 480px) {
  .custom-fields th,
  .custom-fields td {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .pet_status span {
    padding: 1px;
    margin-right: 5px;
  }
}
</style>
