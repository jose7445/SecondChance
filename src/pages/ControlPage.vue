<template>
  <div class="logo">
    <img alt="logo_desktop" src="../assets/logo_desktop.webp" />
    <div class="text-h1">
      ¡Bienvenido a <span class="span-title">SecondChance!</span>
    </div>
    <div class="text-h3 q-pt-lg">¡Gracias por confiar en nuestro proyecto!</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMeta } from "quasar";
export default {
  setup() {
    //Plugin Meta
    //Modifica el títol de la pàgina
    //Millora el SEO del lloc web
    const title = ref("SecondChance | Panel de control");
    useMeta(() => {
      return {
        title: title.value,
      };
    });
  },
};
</script>

<style>
.logo {
  margin-top: 15rem;
  text-align: center;
}

.logo img {
  width: 300px;
}
</style>
