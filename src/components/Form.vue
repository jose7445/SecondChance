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
              v-model="name"
              type="name"
              lazy-rules
              :rules="[(val) => val.length > 0 || 'Campo obligatorio']"
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
              v-model="email"
              type="email"
              lazy-rules
              :rules="[(val, rules) => rules.email(val) || 'Email incorrecto']"
              label="Email"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
          </div>
          <div class="form-item">
            <q-input
              square
              clearable
              v-model="phone"
              type="tel"
              lazy-rules
              mask="(6) ## - ### - ###"
              :rules="[(val, rules) => rules.phone(val) || 'Email incorrecto']"
              label="Telefono"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>
          </div>
          <div class="form-item">
            <q-input
              square
              clearable
              v-model="text"
              type="textarea"
              label="Mensaje"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="text-center inherit">
            <q-btn label="ENVIAR" @click="triggerPositive" color="primary" />
          </div>
        </q-form>
      </div>
    </div>
  </q-card-section>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const text = ref(null);
    const router = useRouter();

    return {
      name,
      email,
      phone,
      text,

      triggerPositive() {
        $q.notify({
          type: "positive",
          message: "Consulta enviada",
        });
        setTimeout(() => location.reload(), 1000);
      },
    };
  },
};
</script>
