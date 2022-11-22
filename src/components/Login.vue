<template>
  <div class="modal-container">
    <div class="recipe-form-header">
      <section class="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2 class="text-h2 text-center text-white">LOGIN</h2>
            <div class="links">
              <div class="link">
                <a
                  ><img
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                /></a>
              </div>
              <div class="link">
                <a class="img-form"
                  ><img
                    class="img-form"
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                /></a>
              </div>
              <div class="link">
                <a
                  ><img
                    src="https://i.postimg.cc/W4Znvrry/codepen.png"
                    alt="codepen"
                /></a>
              </div>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <div class="button-close">
              <button @click="closeForm">
                <img src="../assets/close-button.svg" alt="Close modal" />
              </button>
            </div>
            <form>
              <div class="form-item">
                <input type="text" name="sender" required />
                <label>Usuario:</label>
              </div>
              <div class="form-item">
                <input type="text" name="email" required />
                <label>Contraseña:</label>
              </div>
              <button class="submit-btn">Enviar</button>
            </form>
            <div class="vertical-bottom text-center q-mt-xl">
              Si no tienes todavía, crea tu
              <a href="#" @click="toggleForm()">cuenta</a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Register v-if="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Register from "../components/Register.vue";

export default defineComponent({
  name: "Form",
  components: { Register },

  data() {
    return { showModal: false };
  },
  methods: {
    closeForm() {
      this.$emit("close-modal");
    },
    toggleForm() {
      if (this.showModal === false) {
        this.showModal = true;
      }
    },
  },
});
</script>

<style></style>
