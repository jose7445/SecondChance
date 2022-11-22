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

    <section class="section-three q-pa-xl">
      <div class="text-center text-h2 q-pb-xl">
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
            <div>
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
              />
              <q-btn
                aria-label="Guardar"
                icon-right="mdi-heart-multiple"
                label="Guardar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--SECTION ONE-->
  </q-page>
</template>

<script>
import { getPetById } from "../boot/db.js";

export default {
  name: "CardDetail",
  data() {
    return {
      pets: [],
    };
  },

  async created() {
    let id = this.$route.params.id;
    if (!isNaN(id)) {
      id = parseInt(id);
    }
    this.pets = await getPetById(id);
  },
};
</script>

<style>
/** <!--BACKGROUND PAGE--> **/
.img-bg-detail {
  background-image: url("../assets/imagenes/background_about.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 800px;
}

.img-pet img {
  width: 100%;
  height: 750px;
}

.pet-detail {
  width: 100%;
  padding: 5rem;
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
</style>
