<template>
  <div class="modal-container">
    <div class="recipe-form-header">
      <section class="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2 class="text-h2 text-center text-white">CONTACTAR</h2>
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
                <label>Nombre:</label>
              </div>
              <div class="form-item">
                <input type="text" name="email" required />
                <label>Email:</label>
              </div>
              <div class="form-item">
                <textarea class="" name="message" required></textarea>
                <label>Mensaje:</label>
              </div>
              <button class="submit-btn">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Form",

  data() {
    return {};
  },
  methods: {
    closeForm() {
      this.$emit("close-modal");
    },
  },
});
</script>

<style></style>
