<template>
  <div class="search-bar">
    <div class="search">
      <input
        type="search"
        class="search__input"
        name="search"
        placeholder="Localización (p.e.. Barcelona) o Especie (p.e.. Gato)"
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

<style>
.search {
  display: flex;
  max-width: 600px;
  align-items: center;
  flex: 1;
  margin: 3rem auto 3rem auto;
}

.search__input {
  display: flex;
  flex: 1;
  padding: 1.2rem 2rem 1.2rem 7rem;
  height: 55px;
  font-size: 1.6rem;
  color: #313131;
  border: 110px;

  position: relative;
  letter-spacing: 0.05rem;
  background: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png)
    #ececec;
  background-repeat: no-repeat;
  background-position: 1rem 50%;
  background-size: 4rem;
  outline: 0;
  transition: background 0.3s ease-out, opacity 0.5s ease-out;
}

@media (max-width: 480px) {
  .search__input {
    width: 100%;
    font-size: 0.8rem;
    background-size: 2.5rem;
    padding: 1.2rem 1.5rem 1.2rem 4rem;
  }
}

.search__input:focus {
  background: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png)
    no-repeat 1rem 50% #e6e6e6;
  background-size: 3rem;
}

@media (max-width: 480px) {
  .search__input:focus {
    background-size: 2rem;
  }
}

.search__btn {
  background-color: #79d671;
  height: 55px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 120px;
  color: #313131;
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  cursor: pointer;
  outline: 0;
  transition: all 0.4s ease-out;
}

@media (max-width: 480px) {
  .search__btn {
    width: 20%;
    font-size: 0.8rem;
  }
}

.search__btn:hover {
  background-color: #a7d4a3;
}

.search__icon {
  display: none;
}
</style>
