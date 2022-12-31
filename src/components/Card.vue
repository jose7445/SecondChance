<template>
  <q-card class="bg-card">
    <div class="card-wrapper">
      <router-link :to="{ name: 'adoptar', params: { id: pets.id } }">
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    pets: Object,
  },

  data() {
    return {};
  },
});
</script>
