<template>
  <q-card class="bg-card">
    <div class="card-wrapper">
      <router-link :to="{ name: 'pets', params: { id: pets.id } }">
        <div class="user-pic">
          <img :src="pets.image_url" alt="" />
        </div>
        <div class="name">
          <div class="text-h3 q-mb-lg">{{ pets.name }}</div>
          <p>{{ pets.short_description }}</p>
        </div>
        <div class="social-details q-gutter-lg">
          <div class="post">
            <div class="text-h4">Años</div>
            <p>{{ pets.age }}</p>
          </div>
          <div class="">
            <div class="text-h4">Lugar</div>
            <p>{{ pets.location }}</p>
          </div>
          <div class="">
            <div class="text-h4">Raza</div>
            <p>{{ pets.race }}</p>
          </div>
          <div class="absolute-top card-btn">
            <q-btn
              aria-label="Adoptar"
              icon-right="mdi-chevron-right"
              label="Adoptar"
            />
          </div>
        </div>
      </router-link>
    </div>
  </q-card>
</template>

<script>
import { getAuth } from "firebase/auth";
import { defineComponent } from "vue";
import { arrayRemove, doc } from "firebase/firestore";
import db from "../boot/db";

export default defineComponent({
  name: "Card",
  props: {
    pets: Object,
  },

  data() {
    return {};
  },

  // methods: {
  //   async created() {
  //     const auth = getAuth();
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // User is signed in, see docs for a list of available properties
  //         // https://firebase.google.com/docs/reference/js/firebase.User
  //         const uid = user.uid;
  //         this.auth = true;
  //         // ...
  //       } else {
  //         // User is signed out
  //         // ...
  //       }
  //     });
  //   },

  // async remove() {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;

  //       console.log(uid);
  //       const cityRef = doc(db, "users", user.uid);
  //       setDoc(cityRef, { favourite: arrayRemove(this.pets) });
  //       this.alert = true;
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // },
  // },
});
</script>
