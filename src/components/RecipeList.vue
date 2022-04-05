<template>
  <div id="recipe-list" class="recipe-list">
    <div v-for="(recipe, id) in recipeList" :key="recipe.id">
      <recipe :recipe="recipe" @delete-recipe="deleteRecipe(id)" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Recipe from "./RecipeCard.vue";

export default defineComponent({
  name: "RecipeList",
  props: {
    recipeList: {
      type: Array,
      required: true,
    },
  },
  components: { Recipe },
  methods: {
    deleteRecipe(id) {
      this.$emit("delete-recipe", id);
    },
  },
});
</script>

<style scoped>
.recipe-list {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
