<template>
  <div class="container box bg-secundary">
    <div class="search-bar">
      <form class="search">
        <input
          type="search"
          class="search__input"
          name="search"
          placeholder="Localització (p.e.. Barcelona o Codi Postal)"
          onload="equalWidth()"
          required
        />
        <button class="search__btn">Cercar</button>
        <i class="ion-ios-search search__icon"></i>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "SearchPage",
  components: {},
  setup() {
    return {
      model: ref(null),

      options: [
        {
          label: "Gossos",
          value: "Gossos",
          icon: "mdi-dog",
        },
        {
          label: "Gats",
          value: "Gats",
          icon: "mdi-cat",
        },
        {
          label: "Altres",
          value: "Altres",
          icon: "mdi-dots-horizontal-circle",
        },
      ],
    };
  },
});
</script>

<style>
.box {
  border-radius: 2rem;
  margin: 0 auto;
  width: 100%;
}

legend {
  line-height: 0;
  padding: 0 1em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.4em;
}

.search {
  display: flex;
  max-width: 700px;
  align-items: center;
  flex: 1;
  margin: 3rem auto 3rem auto;
}
.search__input {
  display: flex;
  flex: 1;
  padding: 1.2rem 2rem 1.2rem 7rem;
  height: 70px;
  font-size: 1.7rem;
  color: #4a4a4a;
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

.search__input:focus {
  background: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png)
    no-repeat 1rem 50% #ffffff;
  background-size: 3rem;
}

.search__btn {
  background-color: #79d671;
  height: 70px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 120px;
  color: #4b4b4b;
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  cursor: pointer;
  outline: 0;
  transition: all 0.4s ease-out;
}

.search__btn:hover {
  background-color: #a7d4a3;
}

.search__icon {
  display: none;
}
</style>
