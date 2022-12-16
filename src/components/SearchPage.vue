<template>
  <div class="search-bar">
    <div class="search">
      <input
        type="text"
        class="search__input"
        name="search"
        placeholder="Por localización o especie "
        v-model="search"
      />
      <q-btn
        type="button"
        @click="clearSearch"
        icon-right="mdi-delete"
        aria-label="delete"
        size="lg"
      >
      </q-btn>
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
