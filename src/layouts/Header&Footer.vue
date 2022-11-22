<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-scroll" expand elevated>
      <q-toolbar
        class="responsive-size container q-pa-none q-pt-sm"
        style="height: 110px"
      >
        <!--LOGO DESKTOP-->
        <router-link to="/">
          <q-avatar
            class="gt-xs logo-image"
            style="height: auto; width: 230px; height: 90px"
          >
            <img alt="logo_desktop" src="../assets/logo_desktop.webp" />
          </q-avatar>
        </router-link>

        <!--LOGO-->

        <!--MENU RESPONSIVE-->
        <div class="q-gutter-lg row lt-sm">
          <q-btn
            flat
            color="primary bg-button-menu"
            icon="mdi-menu"
            aria-label="Menu"
          >
            <q-menu
              class="bg-primary text-white lt-sm"
              auto-close
              style="top: 45px"
            >
              <q-list style="min-width: 130px">
                <q-item to="/" clickable>
                  <q-item-section>Inicio</q-item-section>
                </q-item>
                <q-separator dark></q-separator>
                <q-item to="adopt" clickable>
                  <q-item-section>Adoptar</q-item-section>
                </q-item>
                <q-separator dark></q-separator>
                <q-item to="about" clickable>
                  <q-item-section>Nosotros</q-item-section>
                </q-item>

                <q-separator dark></q-separator>
                <q-item to="contact" clickable>
                  <q-item-section>Contacto</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-space></q-space>
          <q-space></q-space>
          <q-space></q-space>
        </div>

        <!--MENU RESPONSIVE-->

        <!--LOGO PHONE-->

        <q-avatar class="lt-sm logo-image" style="width: 100px; height: auto">
          <img alt="logo_phone" src="../assets/logo_phone.webp" />
        </q-avatar>

        <!--LOGO PHONE-->

        <!--MENU DESKTOP-->

        <q-tabs class="gt-xs text-primary">
          <router-link to="/"
            ><q-tab name="Inicio" label="Inicio"
          /></router-link>
          <router-link to="adopt"
            ><q-tab name="Adoptar" label="Adoptar"
          /></router-link>
          <router-link to="/about"
            ><q-tab name="Nosotros" label="Nosotros"
          /></router-link>

          <router-link to="contact"
            ><q-tab name="Contacto" label="Contacto"
          /></router-link>
        </q-tabs>

        <!--MENU DESKTOP-->

        <!--BUTTON LOGIN DESKTOP-->

        <q-space />
        <q-btn
          class="gt-sm"
          label="Entrar"
          icon="mdi-account-plus"
          aria-label="Login"
          @click="toggleForm()"
        />

        <!--BUTTON LOGIN DESKTOP-->

        <!--BUTTON LOGIN PHONE-->

        <q-btn
          class="lt-md"
          round
          flat
          color="primary bg-transparent"
          icon="mdi-account-plus"
          aria-label="Login"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!--FOOTER-->

    <q-footer reveal>
      <q-toolbar class="container q-pa-none">
        <q-toolbar-title>© SecondChance, 2022</q-toolbar-title>
        <div class="">
          <q-btn
            flat
            round
            color="white"
            icon="mdi-facebook"
            href="https://www.facebook.com/"
            aria-label="Facebook"
          />
          <q-btn
            flat
            round
            color="white"
            icon="mdi-instagram"
            href="https://www.instagram.com/"
            aria-label="Instagram"
          />
          <q-btn
            flat
            round
            color="white"
            icon="mdi-linkedin"
            href="https://www.linkedin.com/in/jose-agudo-sabate-bb1041137"
            aria-label="Linkedin"
          />
        </div>
      </q-toolbar>
    </q-footer>
    <!--FOOTER-->
    <Login v-if="showModal" @close-modal="showModal = false" />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import Login from "../components/Login.vue";

export default defineComponent({
  name: "Header&Footer",
  components: { Login },

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
