<template>
  <q-page>
    <div class="img-bg-contact flex-bg">
      <div class="border-bg text-center container text-h1">
        Nuestros compañeros perfectos nunca tienen menos de cuatro patas
        <br /><span class="span-title">- Colette -</span>
      </div>
    </div>

    <section class="section-three bg-white q-pa-xl">
      <div class="text-center text-h2 q-pb-xl">
        Contactar con
        <span class="span-title">nosotros</span>
      </div>
      <div class="container">
        <div class="row-section-three">
          <div class="col-section-three">
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
                  @click="toggleForm()"
                />
              </div>
            </div>
          </div>
          <div class="col-section-three">
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
                  @click="toggleForm()"
                />
              </div>
            </div>
          </div>
          <div class="col-section-three">
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
                  @click="toggleForm()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Form v-if="showModal" @close-modal="showModal = false" />
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
      showModal: false,
    };
  },

  methods: {
    toggleForm() {
      if (this.showModal === false) {
        this.showModal = true;
      }
    },
  },
});
</script>
