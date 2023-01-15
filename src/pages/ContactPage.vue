<template>
  <q-page>
    <!-- Section image top -->
    <div class="size-bg img-contact flex-bg">
      <q-intersection transition="scale" class="container">
        <div class="border-bg text-center text-h1">
          Nuestros compañeros perfectos nunca tienen menos de cuatro patas
          <br /><span class="span-title">- Colette -</span>
        </div>
      </q-intersection>
    </div>

    <!-- Section contact -->
    <section class="section-contact bg-white">
      <div class="text-center text-h2 q-pb-lg">
        Contactar con
        <span class="span-title">nosotros</span>
      </div>
      <div class="container">
        <div class="row-section-contact">
          <div class="col-section-contact">
            <div class="card">
              <div class="icon-wrapper">
                <i class="fa fa-info-circle"></i>
              </div>
              <div class="title-h3 text-h3">Ayuda</div>
              <p>
                ¡Si tienes cualquier duda o simplemente quieres enviarnos alguna
                sugerencia, hazlo ya!
              </p>
              <div class="text-center inherit q-pt-lg">
                <q-btn
                  class="btn-hover"
                  icon-right="mdi-chevron-right"
                  label="Contactar"
                  aria-label="Contactar"
                  @click="medium = true"
                />
              </div>
            </div>
          </div>
          <div class="col-section-contact">
            <div class="card">
              <div class="icon-wrapper">
                <i class="fas fa-paw"></i>
              </div>
              <div class="title-h3 text-h3">Adopciones</div>
              <p>
                ¡Si tienes cualquier duda a cerca de algún proceso de adopción,
                su estado o tienes alguna sugerencia, envíanosla!
              </p>
              <div class="text-center inherit q-pt-lg">
                <q-btn
                  class="btn-hover"
                  icon-right="mdi-chevron-right"
                  label="Contactar"
                  aria-label="Contactar"
                  @click="medium = true"
                />
              </div>
            </div>
          </div>
          <div class="col-section-contact">
            <div class="card">
              <div class="icon-wrapper">
                <i class="fas fa-handshake"></i>
              </div>
              <div class="title-h3 text-h3">Colaboraciones</div>
              <p>
                ¡Si tienes cualquier duda a cerca de como colaborar con
                nosotros, como participar o cualquier duda relacionada, no lo
                dudes!
              </p>
              <div class="text-center inherit q-pt-lg">
                <q-btn
                  class="btn-hover"
                  icon-right="mdi-chevron-right"
                  label="Contactar"
                  aria-label="Contactar"
                  @click="medium = true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dialog form -->
    <q-dialog v-model="medium">
      <q-card class="bg-transparent" style="width: 900px; max-width: 80vw">
        <Form />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Form from "../components/Form.vue";
import { ref } from "vue";
import { useMeta } from "quasar";
export default defineComponent({
  name: "ContactPage",
  components: { Form },
  setup() {
    //Modal per mostrar el formulari
    const medium = ref(false);

    //Plugin Meta
    //Modifica el títol de la pàgina
    //Millora el SEO del lloc web
    const title = ref("SecondChance | Contactar");
    useMeta(() => {
      return {
        title: title.value,
      };
    });
    return {
      medium,
    };
  },
});
</script>
