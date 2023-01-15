<template>
  <div
    class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nada por aquí...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Volver"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMeta } from "quasar";
export default {
  name: "ErrorNotFound",
  setup() {
    //Plugin Meta
    //Modifica el títol de la pàgina
    //Millora el SEO del lloc web
    const title = ref("SecondChance | Error");
    useMeta(() => {
      return {
        title: title.value,
      };
    });
  },
};
</script>
