<template>
  <q-page class="container" style="min-height: auto">
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :items-to-show="3"
      :wrap-around="true"
    >
      <Slide v-for="pets in pets.slice(0, 4)" :key="pets.id">
        <Card :pets="pets" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Card from "./Card.vue";

import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
    Card,
  },
  props: { pets: Array },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      700: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
  }),
});
</script>
