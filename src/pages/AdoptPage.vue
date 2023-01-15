<template>
  <q-page>
    <!-- Section image top -->
    <div class="size-bg img-adopt flex-bg">
      <q-intersection transition="scale" class="container"
        ><div class="border-bg text-center text-h1">
          Los ojos de un animal tienen el poder de hablar un gran lenguaje
          <br /><span class="span-title">- Martin Buber -</span>
        </div></q-intersection
      >
    </div>

    <!--Section search-->
    <section class="section-search bg-white">
      <div class="text-center text-h2 q-pb-lg">
        Busca tu próxima <span class="span-title">mascota</span>
      </div>
      <p class="text-center">
        Encuentra a tu mascota a través del siguiente buscador si lo necesitas.
        Puedes buscar por <b>localidad (p.e Barcelona)</b> o por
        <b>especie (p.e Gato o Perro)</b>
      </p>
      <SearchPage v-on:search="setSearchTerm" />
    </section>

    <!--Section adopt-->
    <section class="section-adopt">
      <div class="text-center text-h2">
        Adopta nuestras
        <span class="span-title">mascotas</span>
        <p v-if="recipeListFiltered.length" class="q-pt-lg">
          ¡Consulta la ficha de los animales en adopción para conocerlos mejor!
        </p>
        <p v-else="recipeListFiltered.length" class="q-pt-lg">
          ¡No hay mascotas encontradas!
        </p>
      </div>

      <!--Pet cards-->
      <div class="container">
        <div class="flex-pet">
          <div
            v-for="pets in recipeListFiltered"
            :key="pets.id"
            v-show="pets.status"
          >
            <Card :pets="pets" />
          </div>
        </div>
      </div>
    </section>

    <!--Section testimonial-->
    <section class="section-testimonial bg-white">
      <div class="text-center text-h2 q-pb-lg">
        ¿Que dicen nuestras
        <span class="span-title">familias de acogida?</span>
      </div>
      <p class="text-center q-pb-lg">
        SecondChance apuesta para mantener la relación y comunicación con las
        familias adoptivas. A continuación podéis leer sus experiencias con el
        proyecto y el proceso de adopción
      </p>
      <div class="container container--testimonials">
        <div class="testimonial">
          <p>
            Contactar con SecondChance a través de la web fue muy fácil e
            intuitivo. Enseguida tuve un flechazo con Grety, ya que pude leer su
            descripción y ver su fotografía. Estoy encantada de haber conocido a
            mi mascota y de colaborar con SecondChance.
          </p>

          <div class="testimonial__details">
            <div class="testimonial__img">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png"
                alt="Avatar"
              />
            </div>
            <div class="testimonial__info">
              <h4 class="q-mb-none">Cristina Nava</h4>
              <h5 class="q-mt-sm">Educadora Social</h5>
            </div>
          </div>
        </div>

        <div class="testimonial">
          <p>
            Desde siempre he querido adoptar una mascota, pero nunca me atrevía
            a dar el paso. Encontré esta web después de ver otras y fue amor
            primer vista. Gracias por facilitarme todo el proceso de adopción y
            ayudar a aquellos que más lo necesitan.
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
            Me encantan los animales y adoptar ha sido mi única opción a la hora
            de acogerlos. Después de visitar diferentes webs de adopción, puedo
            decir que SecondChance es un proyecto que respeta, cuida y da feliz
            a mascotas.
          </p>

          <div class="testimonial__details">
            <div class="testimonial__img">
              <img
                src="https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_960_720.png"
                alt="Avatar"
              />
            </div>
            <div class="testimonial__info">
              <h4 class="q-mb-none">Aleix Agudo</h4>
              <h5 class="q-mt-sm">Biólogo</h5>
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
import { ref } from "vue";
import { useMeta } from "quasar";
import { collection, getDocs } from "firebase/firestore";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "AdoptPage",
  components: { Card, SearchPage },

  data() {
    //Plugin Meta
    //Modifica el títol de la pàgina
    //Millora el SEO del lloc web
    const title = ref("SecondChance | Adoptar");
    useMeta(() => {
      return {
        title: title.value,
      };
    });
    return {
      pets: [],
      searchTerm: "",
    };
  },

  async created() {
    //Funció per mostrar la col·lecció "pets" de Firebase
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
    //Funció per capturar el que s'escriu al cercador
    setSearchTerm(searchTerm) {
      this.searchTerm = searchTerm;
    },
  },

  computed: {
    //Funció que defineix els mètodes  de cerca
    recipeListFiltered() {
      return this.pets.filter((pets) => {
        return (
          pets.location
            .toLowerCase()
            .includes(this.searchTerm.toLocaleLowerCase()) ||
          pets.species
            .toLowerCase()
            .includes(this.searchTerm.toLocaleLowerCase())
        );
      });
    },
  },
});
</script>
