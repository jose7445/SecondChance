<template>
  <div class="search-bar">
    <div class="search">
      <input
        type="search"
        class="search__input"
        name="search"
        placeholder="Localización (p.ej: Barcelona) o Especie (p.ej: Gato)"
        v-model="search"
      />
      <button class="search__btn" @click="clearSearch">Limpiar</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchPage",
  components: {},
  data: () => ({
    search: "",
  }),

  methods: {
    clearSearch() {
      this.search = "";
    },
  },
  watch: {
    search(newVal) {
      this.$emit("search", newVal);
    },
  },
});
</script>
