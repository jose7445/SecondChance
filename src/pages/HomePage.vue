<template>
  <q-page>
    <!-- Section image top -->

    <div class="size-bg img-home flex-bg">
      <q-intersection transition="scale" class="container">
        <div class="border-bg text-center text-h1">
          Un país se puede juzgar por la forma en que trata a sus animales
          <br /><span class="span-title">- Mahatma Gandhi -</span>
        </div>
      </q-intersection>
    </div>

    <!--Carousel-->
    <section class="section-pets">
      <div class="text-h2 text-center">
        Mascotas adorables
        <span class="span-title">cerca de ti!</span>
        <p class="q-pt-lg">
          ¡Consulta la ficha de los animales en adopción para conocerlos mejor!
        </p>
      </div>

      <div class="carousel">
        <Carousel :pets="pets" />
        <div class="q-pt-lg">
          <q-btn
            aria-label="Más adopciones"
            icon-right="mdi-chevron-right"
            label="Más adopciones"
            to="/adoptar"
          />
        </div>
      </div>
    </section>

    <!-- Section secondchance -->
    <section class="section-secondchance bg-white">
      <div class="container flex-section-secondchance">
        <div class="flex-left">
          <div class="text-h2 q-pb-lg">
            ¿Qué es <span class="span-title">SecondChance?</span>
          </div>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera.
          </p>
        </div>
        <div class="flex-right">
          <q-knob
            readonly
            v-model="pets.length"
            show-value
            size="100px"
            :thickness="0.22"
            color="primary"
            track-color="green-1"
            class="text-orange q-ma-lg text-weight-medium"
            aria-label="knob"
          ></q-knob>
          <div class="text-center text-h4">Adopciones</div>
        </div>

        <div>
          <q-knob
            readonly
            show-value
            v-model="adoptados"
            size="100px"
            :thickness="0.22"
            color="primary"
            track-color="green-1"
            class="text-orange q-ma-lg text-weight-medium"
            aria-label="knob"
          ></q-knob>
          <div class="text-center text-h4">Adoptados</div>
        </div>
        <div>
          <q-knob
            readonly
            v-model="afiliados"
            show-value
            size="100px"
            :thickness="0.22"
            color="primary"
            track-color="green-1"
            class="text-orange q-ma-lg text-weight-medium"
            aria-label="knob"
          ></q-knob>
          <div class="text-center text-h4">Afiliados</div>
        </div>
      </div>
    </section>

    <!-- Section why -->
    <section class="section-why">
      <div class="container">
        <div class="text-center text-h2">
          ¿Por qué
          <span class="span-title">adoptar?</span>
        </div>
        <div class="flex-first q-pt-lg">
          <div class="img-section-why">
            <img alt="img_salvar" src="../assets/imagenes/safe.webp" />
          </div>
          <div class="text-section-why">
            <div class="text-h3 q-pl-lg q-pt-lg">
              Salvar una <span class="span-title">vida</span>
            </div>
            <p class="q-pl-lg q-pt-lg">
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
          <div class="img-section-why">
            <img alt="img_mejorar" src="../assets/imagenes/help.webp" />
          </div>

          <div class="text-section-why">
            <div class="text-left text-h3 q-pt-lg">
              Ayudar a una <span class="span-title">mascota</span>
            </div>

            <p class="q-pr-lg q-pt-lg">
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

    <!-- Section collaborate -->
    <section class="section-collaborate bg-white">
      <div class="text-center text-h2">
        Colaborar con
        <span class="span-title">nosotros</span>
      </div>
      <div class="row-section-collaborate q-pt-lg container">
        <div class="col-section-collaborate">
          <!-- Contact card -->
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa fa-paw"></i>
            </div>
            <div class="title-h3 text-h3">Adoptar</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="col-section-collaborate">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-hand-holding-dollar"></i>
            </div>
            <div class="title-h3 text-h3">Donaciones</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="col-section-collaborate">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-house"></i>
            </div>
            <div class="title-h3 text-h3">Protectoras</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Carousel from "../components/Carousel.vue";
import { getAllPets } from "../boot/db";
import { ref } from "vue";
import { useMeta } from "quasar";
export default defineComponent({
  name: "HomePage",
  components: { Carousel },

  data() {
    const title = ref("SecondChance | Inicio"); // we define the "title" prop
    useMeta(() => {
      return {
        // whenever "title" from above changes, your meta will automatically update
        title: title.value,
      };
    });
    return {
      pets: [],
      adoptados: 2,
      afiliados: 3,
    };
  },

  mounted() {
    getAllPets().then((pets) => {
      this.pets = pets;
    });
  },
});
</script>
