<template>
  <section>
    <div class="container">
      <div class="text-center text-h2">
        Tus mascotas <span class="span-title">favoritas</span>
        <p v-if="favouriteArray.length" class="q-pt-lg">
          ¡Consulta la ficha de las mascotas en adopción para conocerlos mejor!
        </p>
        <p v-else class="q-pt-lg">
          ¡No tienes ninguna mascota en tus favoritos!
        </p>
      </div>
      <div class="row justify-around">
        <div v-for="favouriteArray in favouriteArray" :key="favouriteArray.id">
          <Card :pets="favouriteArray" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth } from "firebase/auth";
import { defineComponent } from "vue";
import { getDoc, doc } from "firebase/firestore";
import db from "../boot/db";
import Card from "../components/Card.vue";
import { ref } from "vue";
import { useMeta } from "quasar";

export default defineComponent({
  components: {
    Card,
  },
  data() {
    //Plugin Meta
    //Modifica el títol de la pàgina
    //Millora el SEO del lloc web
    const title = ref("SecondChance | Favoritos");
    useMeta(() => {
      return {
        title: title.value,
      };
    });
    return {
      favouriteArray: [],
      showModal: false,
    };
  },

  //Funció per recuperar l'usuari que ha iniciat sessió
  async created() {
    const auth = getAuth();
    const user = auth.currentUser;

    //Funció per recuperar la informació de l'usuari que ha iniciat sessió
    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      try {
        if (docSnap.exists()) {
          const userInfo = docSnap.data();
          this.favouriteArray = userInfo.favourite;
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
});
</script>

<style>
@media (max-width: 480px) {
  .column-padding {
    padding: 0;
  }
}
</style>
