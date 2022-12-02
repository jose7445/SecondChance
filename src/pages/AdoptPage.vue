<template>
  <q-page>
    <!--BACKGROUND PAGE-->

    <div class="img-bg-adopt flex-bg">
      <div class="border-bg text-center container text-h1">
        Los ojos de un animal tienen el poder de hablar un gran lenguaje
        <br /><span class="span-title">- Martin Buber -</span>
      </div>
    </div>

    <!--/BACKGROUND PAGE-->

    <!--SECTION SEARCH-->
    <section class="section-one bg-white q-pa-xl">
      <div class="container">
        <div class="text-center text-h2 q-pb-lg">
          Busca tu proxima <span class="span-title">mascota</span>
        </div>
        <p class="text-justify">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera.
        </p>
        <SearchPage v-on:search="setSearchTerm" />
      </div>
    </section>

    <!--SECTION SEARCH-->

    <!--SECTION ONE-->

    <section class="section-three q-pa-xl">
      <div class="text-center text-h2 q-pb-xl">
        Adopotar nuestras
        <span class="span-title">mascotes</span>
        <!-- <div>{{ searchTerm }}</div> -->
        <p class="q-pt-md">
          ¡Consulta la ficha de los animales en adopción para conocerlos mejor!
        </p>
      </div>
      <div class="container">
        <div class="flex-pet">
          <div v-for="pets in recipeListFiltered" :key="pets.id">
            <Card :pets="pets" />
          </div>
        </div>
      </div>
    </section>
    <!--SECTION ONE-->

    <!--SECTION TWO-->
    <section class="section-one bg-white q-pa-xl">
      <div class="text-center text-h2 q-pb-lg">
        Que dicen nuestros <span class="span-title">amigos?</span>
      </div>
      <p class="text-center container q-pb-xl">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera.
      </p>
      <div class="container container--testimonials">
        <div class="testimonial">
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </p>

          <div class="testimonial__details">
            <div class="testimonial__img">
              <img
                src="https://cdn.quasar.dev/img/boy-avatar.png"
                alt="Avatar"
              />
            </div>
            <div class="testimonial__info">
              <h4 class="q-mb-none">Jose Luis Agudo</h4>
              <h5 class="q-mt-sm">Multimedia</h5>
            </div>
          </div>
        </div>

        <div class="testimonial">
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </p>

          <div class="testimonial__details">
            <div class="testimonial__img">
              <img
                src="https://cdn.quasar.dev/img/boy-avatar.png"
                alt="Avatar"
              />
            </div>
            <div class="testimonial__info">
              <h4 class="q-mb-none">Jose Luis Agudo</h4>
              <h5 class="q-mt-sm">Multimedia</h5>
            </div>
          </div>
        </div>
        <div class="testimonial">
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </p>

          <div class="testimonial__details">
            <div class="testimonial__img">
              <img
                src="https://cdn.quasar.dev/img/boy-avatar.png"
                alt="Avatar"
              />
            </div>
            <div class="testimonial__info">
              <h4 class="q-mb-none">Jose Luis Agudo</h4>
              <h5 class="q-mt-sm">Multimedia</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--SECTION TWO-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Card from "../components/Card.vue";
import SearchPage from "../components/SearchPage.vue";
import { db } from "../boot/firebase";

import { collection, getDocs } from "firebase/firestore";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "AdoptPage",
  components: { Card, SearchPage },
  data: () => ({
    pets: [],
    searchTerm: "",
  }),

  async created() {
    try {
      const querySnapshot = await getDocs(collection(db, "pets"));
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " =>", doc.data());
        this.pets.push(doc.data());
        //console.log(this.pets);
      });
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    setSearchTerm(searchTerm) {
      this.searchTerm = searchTerm;
    },
  },

  computed: {
    recipeListFiltered() {
      if (!this.searchTerm) {
        return this.pets;
      }
      return this.pets.filter((pets) => {
        return (
          pets.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          pets.species.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    },
  },
});
</script>

<style></style>
