<template>
  <div id="app">
    <div class="header">
      <img class="logo" alt="UOC logo" src="./assets/uoc-logo.png" />
      <div class="app-name">Recipe book</div>
    </div>
    <search-bar @showForm="toggleForm" @search="setSearchTerm" />
    <recipe-list :recipeList="filteredData" @delete-recipe="deleteRecipe" />
    <recipe-form
      v-if="showModal"
      @add-recipe="addRecipe"
      @close-modal="showModal = false"
    />
  </div>
</template>

<script>
import RecipeList from "./components/RecipeList.vue";
import RecipeForm from "./components/RecipeForm.vue";
import SearchBar from "./components/SearchBar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    RecipeList: RecipeList,
    RecipeForm,
    SearchBar,
  },
  data: () => ({
    recipeList: [
      {
        id: 1,
        servings: 4,
        time: "30m",
        difficulty: "Easy",
        title: "Spaghetti",
        ingredients: ["noodles", "tomato sauce", "cheese"],
        directions: ["boil noodles", "cook noodles", "eat noodles"],
        imageUrl:
          "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F02%2F14%2Frecetas-4115-spaghetti-boloesa-facil-2000.jpg",
      },
      {
        id: 2,
        servings: 2,
        time: "15m",
        difficulty: "Medium",
        title: "Pizza",
        ingredients: ["dough", "tomato sauce", "cheese"],
        directions: ["boil dough", "cook dough", "eat pizza"],
        imageUrl:
          "https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png",
        featured: true,
      },
      {
        id: 3,
        servings: 6,
        time: "1h",
        difficulty: "Hard",
        title: "Salad",
        ingredients: ["lettuce", "tomato", "cheese"],
        directions: ["cut lettuce", "cut tomato", "cut cheese"],
        imageUrl:
          "https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/SPAIN/calcmenu/recipes/ES-recipes/In-Development/american-bbq-beef-salad/main-header.jpg",
      },
    ],
    showModal: false,
    filteredData: RecipeList,
  }),
  methods: {
    deleteRecipe(id) {
      this.recipeList.splice(id, 1);
    },
    addRecipe(recipe) {
      this.recipeList.push(recipe);
    },
    toggleForm() {
      if (this.showModal === false) {
        this.showModal = true;
      }
    },
    setSearchTerm(value) {
      console.log(value);
      if (value && value.length > 0) {
        this.filteredData = this.recipeList.filter((i) => {
          const val = value.toLowerCase();
          const title = i.title && i.title.toLowerCase();
          if (val && title.indexOf(val) !== -1) {
            return true;
          }
          return false;
        });
      } else {
        this.filteredData = this.recipeList;
      }
    },
  },
});
</script>

<style>
S body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.header {
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.header .logo {
  max-height: 50px;
}
.header .app-name {
  margin-left: 25px;
  font-weight: bold;
  font-size: 20px;
}
</style>

