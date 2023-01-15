<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-scroll q-pt-md" expand elevated>
      <q-toolbar
        class="responsive-size container q-pa-none"
        style="height: 110px"
      >
        <!--logo desktop-->
        <router-link to="/" aria-label="page">
          <div class="gt-xs logo-image">
            <img
              alt="logo_desktop"
              src="../assets/logo_desktop.webp"
              width="50"
              height="100"
            />
          </div>
        </router-link>

        <!--menu phone-->
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
                <q-item to="/adoptar" clickable>
                  <q-item-section>Adoptar</q-item-section>
                </q-item>
                <q-separator dark></q-separator>
                <q-item to="/nosotros" clickable>
                  <q-item-section>Nosotros</q-item-section>
                </q-item>

                <q-separator dark></q-separator>
                <q-item to="/contactar" clickable>
                  <q-item-section>Contactar</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-space></q-space>
          <q-space></q-space>
          <q-space class="q-mx-lg"></q-space>
        </div>

        <!--logo phone-->
        <router-link to="/" aria-label="page">
          <q-avatar class="lt-sm logo-image" style="width: 100px; height: auto">
            <img alt="logo_phone" src="../assets/logo_phone.webp" />
          </q-avatar>
        </router-link>

        <!--menu desktop-->
        <q-tabs class="gt-xs text-secondary">
          <router-link to="/"
            ><q-tab name="Inicio" label="Inicio"
          /></router-link>
          <router-link to="/adoptar"
            ><q-tab name="Adoptar" label="Adoptar"
          /></router-link>
          <router-link to="/nosotros"
            ><q-tab name="Nosotros" label="Nosotros"
          /></router-link>

          <router-link to="/contactar"
            ><q-tab name="Contactar" label="Contactar"
          /></router-link>
        </q-tabs>

        <!--button login & logout desktop-->
        <q-space />
        <div v-if="!isLoggedIn">
          <q-btn
            class="gt-sm"
            label="Entrar"
            icon="mdi-account-plus"
            aria-label="Login"
            @click="medium = true"
          />
        </div>

        <!--button login succes-->
        <div v-if="isLoggedIn">
          <div class="button_login">
            <q-btn-dropdown
              icon="mdi-account-check"
              color="primary"
              class="btn-hover"
            >
              <!--user options-->
              <div class="row no-wrap q-pa-md justify-center">
                <div class="column justify-center">
                  <q-item to="/panelcontrol" clickable>
                    <q-item-section>
                      <q-item-label>Panel de control</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <div class="text-subtitle1 q-mt-md q-mb-xs">
                    {{ currentUser.email }}
                  </div>

                  <!--button logout-->
                  <q-btn
                    color="primary"
                    label="Cerrar sesión"
                    class="btn-hover"
                    push
                    size="sm"
                    v-close-popup
                    @click="logout"
                  />
                </div>
              </div>
            </q-btn-dropdown>
          </div>
        </div>

        <!--button login phone-->
        <div v-if="!isLoggedIn">
          <q-btn
            class="lt-md"
            round
            flat
            color="primary bg-transparent"
            icon="mdi-account-plus"
            aria-label="Login"
            @click="medium = true"
          />
        </div>
      </q-toolbar>
    </q-header>

    <!--model login form-->
    <q-dialog v-model="medium">
      <q-card class="bg-transparent" style="width: 900px; max-width: 80vw">
        <Login />
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!--footer-->
    <q-footer reveal>
      <q-toolbar class="container q-pa-none">
        <q-toolbar-title class="title-footer"
          >SecondChance, 2023©
        </q-toolbar-title>
        <div class="">
          <q-btn
            flat
            round
            color="white"
            icon="mdi-facebook"
            href="https://www.facebook.com/joseluis.agudosabate/"
            aria-label="Facebook"
          />
          <q-btn
            flat
            round
            color="white"
            icon="mdi-instagram"
            href="https://www.instagram.com/_tortiillas_/"
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
  </q-layout>
</template>

<script>
import { ref } from "vue";
import Login from "../components/Login.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

import { useQuasar } from "quasar";

export default {
  name: "Header&Footer",
  components: { Login },

  setup() {
    const medium = ref(false);
    const currentUser = ref(null);
    const isLoggedIn = ref(null);
    const router = useRouter();
    const $q = useQuasar();

    //Funció per saber l'estat de l'usuari logejat
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser.value = user;
        isLoggedIn.value = true;
        medium.value = false;
      } else {
        isLoggedIn.value = false;
        currentUser.value = null;
      }
    });

    return {
      medium,
      currentUser,
      isLoggedIn,

      //Funcio per tancar sessió
      async logout() {
        const auth = getAuth();
        await signOut(auth)
          .then(() => {
            isLoggedIn.value = false;
            currentUser.value = null;
            $q.notify({
              message: "Has salido de tu sesión",
              type: "positive",
            });
            setTimeout(() => router.push({ path: "/" }), 500);
          })

          .catch((err) => {
            console.log(err);
          });
      },
    };
  },
};
</script>
