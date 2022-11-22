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
        <div class="flex-pet">
          <div v-for="pets in pets" :key="pets.id">
            <Card :pets="pets" />
          </div>
        </div>
      </div>
    </section>
    <!--SECTION ONE-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Card from "../components/Card.vue";
import { db } from "../boot/firebase";
import { collection, getDocs } from "firebase/firestore";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "AdoptPage",
  components: { Card },
  data() {
    return {
      pets: [],
    };
  },

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
});
</script>
