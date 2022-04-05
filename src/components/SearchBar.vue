<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search for a recipe"
      id="search"
      @change="search"
      v-model="searchText"
    />
    <button @click="clearSearch">Clear search</button>
    <button @click="showForm">Add a new recipe</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  data() {
    return { searchText: "" };
  },
  methods: {
    showForm() {
      console.log("show");
      this.$emit("show-form");
    },
    clearSearch() {
      this.clearInput = "";
    },
    search() {
      this.$emit("search", this.searchText);
    },
  },
});
</script>
<style scoped>
.search {
  width: 100%;
  padding: 15px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 25px;
}
.search input {
  width: 100%;
  width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 auto;
  max-width: 500px;
}
.search button {
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background: #4caf50;
  color: #fff;
}
</style>
