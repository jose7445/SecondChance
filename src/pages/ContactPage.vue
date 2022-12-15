<template>
  <q-page>
    <!-- Section image top -->
    <div class="img-bg-contact flex-bg">
      <div class="border-bg text-center container text-h1">
        Nuestros compañeros perfectos nunca tienen menos de cuatro patas
        <br /><span class="span-title">- Colette -</span>
      </div>
    </div>

    <!-- Section contact -->
    <section class="section-contact bg-white q-pa-xl">
      <div class="text-center text-h2 q-pb-xl">
        Contactar con
        <span class="span-title">nosotros</span>
      </div>
      <div class="container">
        <div class="row-section-contact">
          <div class="col-section-contact">
            <div class="card">
              <div class="icon-wrapper">
                <i class="fa fa-paw"></i>
              </div>
              <div class="title-h3 text-h3">Ayuda</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
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
                <i class="fas fa-hand-holding-dollar"></i>
              </div>
              <div class="title-h3 text-h3">Adopciones</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
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
                <i class="fas fa-house"></i>
              </div>
              <div class="title-h3 text-h3">Colaboraciones</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
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

export default defineComponent({
  name: "ContactPage",
  components: { Form },
  data() {
    return {
      medium: false,
    };
  },
});
</script>
