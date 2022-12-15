<template>
  <q-card-section class="q-pa-none">
    <div class="contact-box">
      <div class="contact-links">
        <h2 class="text-h2 text-center text-white">CONTACTAR</h2>
        <div class="links q-gutter-lg">
          <q-btn
            round
            color="green"
            size="20px"
            icon="mdi-facebook"
            href="https://www.facebook.com/joseluis.agudosabate/"
            aria-label="Facebook"
          />
          <q-btn
            round
            color="green"
            size="20px"
            icon="mdi-linkedin"
            href="https://www.instagram.com/_tortiillas_/"
            aria-label="Instagram"
          />
          <q-btn
            round
            color="green"
            size="20px"
            icon="mdi-instagram"
            href="https://www.linkedin.com/in/jose-agudo-sabate-bb1041137"
            aria-label="Facebook"
          />
        </div>
      </div>
      <div class="contact-form-wrapper">
        <q-form class="q-gutter-md">
          <div class="form-item">
            <q-input
              square
              clearable
              required
              v-model="name"
              type="text"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Campo obligatorio']"
              label="Nombre"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </div>
          <div class="form-item">
            <q-input
              square
              clearable
              required
              v-model="email"
              type="email"
              lazy-rules
              :rules="[(val, rules) => rules.email(val) || 'Email incorrecto']"
              label="Email"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
          </div>

          <div class="form-item">
            <q-input
              square
              required
              clearable
              v-model="text"
              type="textarea"
              label="Mensaje"
              autogrow
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="text-center inherit">
            <q-btn
              type="submit"
              label="ENVIAR"
              @click="triggerPositive"
              color="primary"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-card-section>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";


export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const email = ref(null);
    const text = ref(null);

    return {
      name,
      email,
      text,

      triggerPositive() {
        if (name.value && email.value && text.value != null) {
          $q.notify({
            type: "positive",
            message: "Consulta enviada",
          });
          setTimeout(() => location.reload(), 1200);
        } else {
          $q.notify({
            type: "negative",
            message: "Faltan campos por rellenar",
          });
        }
      },
    };
  },
};
</script>
