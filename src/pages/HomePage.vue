<template>
  <q-page>
    <!--BACKGROUND PAGE-->

    <div class="img-bg flex-bg">
      <div class="border-bg text-center container text-h1">
        Un país se puede juzgar por la forma en que trata a sus animales
        <br /><span class="span-title">- Mahatma Gandhi -</span>
      </div>
    </div>

    <!--/BACKGROUND PAGE-->

    <!--CARD PAGE-->

    <section>
      <div class="text-center text-h2 q-pa-xl">
        Mascotas adorables
        <span class="span-title">cerca de ti!</span>
        <p class="q-pt-md">
          ¡Consulta la ficha de los animales en adopción para conocerlos mejor!
        </p>
      </div>
      <Carousel :pets="pets" />
      <div class="text-center inherit q-pa-xl">
        <q-btn
          aria-label="Más adopciones"
          icon-right="mdi-chevron-right"
          label="Más adopciones"
          to="/adopt"
        />
      </div>
    </section>

    <!--/CARD PAGE-->

    <!--SECTION ONE PAGE-->

    <section class="section-one bg-white q-pa-xl">
      <div class="container flex-section-one">
        <div class="flex-left">
          <div class="text-left text-h2 q-pb-lg">
            ¿Qué es <span class="span-title">SecondChance?</span>
          </div>
          <p class="text-justify">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera.
          </p>
        </div>
        <div class="flex-right text-center">
          <q-knob
            readonly
            :value="pets.length"
            v-model="pets.length"
            show-value
            size="90px"
            :thickness="0.22"
            color="primary"
            track-color="green-2"
            class="text-orange q-ma-md"
            aria-label="knob"
          ></q-knob>
          <div class="text-center text-h4">Adopciones</div>
        </div>

        <div>
          <q-knob
            readonly
            show-value
            :value="pets.length"
            v-model="pets.length"
            size="90px"
            :thickness="0.22"
            color="primary"
            track-color="green-2"
            class="text-orange q-ma-md"
            aria-label="knob"
          ></q-knob>
          <div class="text-center text-h4">Adoptados</div>
        </div>
        <div>
          <q-knob
            readonly
            :value="pets.length"
            v-model="pets.length"
            show-value
            size="90px"
            :thickness="0.22"
            color="primary"
            track-color="green-2"
            class="text-orange q-ma-md"
            aria-label="knob"
          ></q-knob>
          <div class="text-center text-h4">Afiliados</div>
        </div>
      </div>
    </section>

    <!--/SECTION ONE PAGE-->

    <!--/SECTION TWO PAGE-->

    <section class="section-two q-pa-xl">
      <div class="text-center text-h2">
        ¿Por qué
        <span class="span-title">adoptar?</span>
      </div>
      <div class="container">
        <div class="flex-first q-pt-xl">
          <div class="img-section-two">
            <img alt="img_salvar" src="../assets/imagenes/safe.webp" />
          </div>
          <div class="text-section-two">
            <div class="text-left text-h3 q-pl-xl q-pt-lg">
              Salvar una <span class="span-title">vida</span>
            </div>
            <p class="q-pl-xl q-pt-lg q-ma-none text-justify">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original.persona que
              se dedica a la imprenta) desconocido usó una galería de textos y
              los mezcló de tal manera que logró hacer un libro de textos
              especimen. No sólo sobrevivió 500 años.
            </p>
          </div>
        </div>
        <div class="flex-second">
          <div class="img-section-two">
            <img
              alt="img_mejorar"
              src="../assets/imagenes/help.webp"
              max-width="500px"
              height="600"
            />
          </div>
          <div class="text-section-two">
            <div class="text-left text-h3 q-pr-xl q-pt-lg">
              Ayudar a una <span class="span-title">mascota</span>
            </div>
            <p class="q-pr-xl q-pt-lg q-ma-none text-justify">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original.persona que
              se dedica a la imprenta) desconocido usó una galería de textos y
              los mezcló de tal manera que logró hacer un libro de textos
              especimen. No sólo sobrevivió 500 años.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--/SECTION TWO PAGE-->

    <!--/SECTION THREE PAGE-->

    <section class="section-three bg-white q-pa-xl">
      <div class="text-center text-h2">
        Colaborar con
        <span class="span-title">nosotros</span>
      </div>
      <div class="container">
        <div class="row-section-three q-pt-xl">
          <div class="col-section-three">
            <div class="card">
              <div class="icon-wrapper">
                <i class="fa fa-paw"></i>
              </div>
              <div class="title-h3 text-h3">Adoptar</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div class="col-section-three">
            <div class="card">
              <div class="icon-wrapper">
                <i class="fas fa-hand-holding-dollar"></i>
              </div>
              <div class="title-h3 text-h3">Donaciones</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div class="col-section-three">
            <div class="card">
              <div class="icon-wrapper">
                <i class="fas fa-house"></i>
              </div>
              <div class="title-h3 text-h3">Protectoras</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/SECTION THREE PAGE-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import Carousel from "../components/Carousel.vue";
import Form from "../components/Form.vue";
import { getAllPets } from "../boot/db";

export default defineComponent({
  name: "HomePage",
  components: { Carousel, Form },
  data() {
    return {
      pets: [],
      showModal: false,
    };
  },

  mounted() {
    getAllPets().then((pets) => {
      this.pets = pets;
    });
  },
});
</script>