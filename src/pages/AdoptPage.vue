<template>
  <q-page>
    <!-- Section image top -->
    <div class="size-bg img-adopt flex-bg">
      <div class="border-bg text-center container text-h1">
        Los ojos de un animal tienen el poder de hablar un gran lenguaje
        <br /><span class="span-title">- Martin Buber -</span>
      </div>
    </div>

    <!--Section search-->
    <section class="section-search bg-white">
      <div class="text-center text-h2 q-pb-lg">
        Busca tu proxima <span class="span-title">mascota</span>
      </div>
      <p class="text-center">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal maneraqweqweqweqweqwe.
      </p>
      <SearchPage v-on:search="setSearchTerm" />
    </section>

    <!--Section adopt-->
    <section class="section-adopt">
      <div class="text-center text-h2">
        Adopotar nuestras
        <span class="span-title">mascotes</span>
        <p class="q-pt-lg">
          ¡Consulta la ficha de los animales en adopción para conocerlos mejor!
        </p>
      </div>

      <!--Pet cards-->
      <div class="container">
        <div class="flex-pet">
          <div v-for="pets in recipeListFiltered" :key="pets.id">
            <Card :pets="pets" />
          </div>
        </div>
      </div>
    </section>

    <!--Section testimonial-->
    <section class="section-testimonial bg-white">
      <div class="text-center text-h2 q-pb-lg">
        Que dicen nuestras
        <span class="span-title">familias de acogida?</span>
      </div>
      <p class="text-center q-pb-lg">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas archivos
        de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
        industrias desde el año 1500, cuando un impresor (N. del T. persona que
        se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera. Lorem Ipsum es simplemente el texto de relleno de
        las imprentas archivos de texto. Lorem Ipsum ha sido el texto de relleno
        estándar de las industrias desde el año 1500, cuando un impresor (N. del
        T. persona que se dedica a la imprenta) desconocido usó una galería de
        textos y los mezcló de tal manera.
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
                src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png"
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
                src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
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
                src="https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_960_720.png"
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
        this.pets.push(doc.data());
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
          pets.location.toLowerCase().includes(this.searchTerm) ||
          pets.species.toLowerCase().includes(this.searchTerm)
        );
      });
    },
  },
});
</script>

<style></style>
