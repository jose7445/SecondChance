<template>
  <div class="modal-container">
    <div class="recipe-form">
      <div class="recipe-form-header">
        <h2>Add a new recipe</h2>
        <div class="recipe-form-required" v-if="this.error">
          <p>The field name, ingredients and directions are required</p>
        </div>
        <button @click="closeForm">
          <img src="../assets/close-button.svg" alt="Close modal" />
        </button>
      </div>
      <form ref="anyName">
        <div class="recipe-form-item">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div class="recipe-form-item">
          <label for="imageUrl">Image URL</label>
          <input type="text" id="imageUrl" v-model="url" />
        </div>
        <div class="recipe-form-item">
          <label for="servings">Servings</label>
          <input type="number" id="servings" v-model="serving" />
        </div>
        <div class="recipe-form-item">
          <label for="time">Time</label>
          <input type="number" id="time" v-model="time" />
        </div>
        <div class="recipe-form-item">
          <label for="difficulty">Difficulty</label>
          <select id="difficulty" v-model="dificulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div class="recipe-form-item">
          <label for="ingredients">Ingredients</label>
          <textarea type="text" id="ingredients" v-model="ingredients" />
        </div>
        <div class="recipe-form-item">
          <label for="directions">Directions</label>
          <textarea type="text" id="directions" v-model="directions" />
          <label for="recipe">Featured Recipe</label>
          <input
            type="checkbox"
            id="featured"
            name="featured"
            v-model="featured"
          />
        </div>
        <div class="recipe-form-item">
          <button type="submit" @click="createRecipe">Add Recipe</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  name: "RecipeForm",
  data() {
    return {
      error: false,
      // DEFAULT VALUES FORM
      title: "",
      url: "",
      serving: "",
      time: "",
      dificulty: "",
      ingredients: [],
      directions: [],
      featured: "",
    };
  },
  methods: {
    createRecipe(e) {
      e.preventDefault();
      if (!this.title || !this.ingredients.length || !this.directions.length) {
        this.error = true;
      } else {
        const recipe = {
          id: uuidv4(),
          title: this.title,
          image: this.url,
          servings: this.serving,
          time: this.time,
          dificulty: this.dificulty,
          ingredients: document.getElementById("ingredients").value.split("\n"),
          directions: document.getElementById("directions").value.split("\n"),
          featured: this.featured,
        };
        this.$emit("add-recipe", recipe);
        //RESET VALUES FORM
        this.$refs.anyName.reset();
      }
    },
    closeForm() {
      this.$emit("close-modal");
    },
  },
});
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.recipe-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
}

.recipe-form-header button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
}
.recipe-form-header button img {
  width: 20px;
}
.recipe-form-item {
  margin-bottom: 20px;
}
.recipe-form-item label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
.recipe-form-item input,
.recipe-form-item textarea,
.recipe-form-item select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 300px;
}
.recipe-form-item button {
  background: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.recipe-form-required {
  color: red;
}
</style>
