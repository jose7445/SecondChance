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
        <!--LOGO DESKTOP-->

        <!--MENU PHONE-->
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
                <q-item to="adoptar" clickable>
                  <q-item-section>Adoptar</q-item-section>
                </q-item>
                <q-separator dark></q-separator>
                <q-item to="nosotros" clickable>
                  <q-item-section>Nosotros</q-item-section>
                </q-item>

                <q-separator dark></q-separator>
                <q-item to="contactar" clickable>
                  <q-item-section>Contacto</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-space></q-space>
          <q-space></q-space>
          <q-space></q-space>
        </div>
        <!--MENU PHONE-->

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
          <router-link to="adoptar"
            ><q-tab name="Adoptar" label="Adoptar"
          /></router-link>
          <router-link to="/nosotros"
            ><q-tab name="Nosotros" label="Nosotros"
          /></router-link>

          <router-link to="contactar"
            ><q-tab name="Contacto" label="Contacto"
          /></router-link>
        </q-tabs>
        <!--MENU DESKTOP-->

        <!--BUTTON LOGIN + LOGOUT DESKTOP-->
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
        <!--BUTTON LOGIN OK DESKTOP-->
        <div v-if="isLoggedIn">
          <div class="q-pa-md button_login">
            <q-btn-dropdown
              icon="mdi-account-check"
              color="primary"
              class="btn-hover"
            >
              <div class="row no-wrap q-pa-md justify-center">
                <div class="column">
                  <div class="text-h6 q-mb-md">Opciones</div>
                  <q-item to="/panelcontrol" clickable>
                    <q-item-section>
                      <q-item-label>Panel de control</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="72px">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    />
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">
                    {{ currentUser.email }}
                  </div>
                  <!--BUTTON LOGOUT DESKTOP-->
                  <q-btn
                    color="primary"
                    label="Logout"
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
        <!--BUTTON LOGIN + LOGOUT DESKTOP-->

        <!--BUTTON LOGIN PHONE-->
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

    <!--MODEL LOGIN-->
    <q-dialog v-model="medium">
      <q-card class="bg-transparent" style="width: 900px; max-width: 80vw">
        <Login />
      </q-card>
    </q-dialog>
    <!--MODEL LOGIN-->

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
    <!--FOOTER-->
  </q-layout>
</template>

<script>
import { ref } from "vue";
import Login from "../components/Login.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "Header&Footer",
  components: { Login },

  setup() {
    const medium = ref(false);
    const currentUser = ref(null);
    const isLoggedIn = ref(null);

    // auth status
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser.value = user;
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
        currentUser.value = null;
      }
    });

    return {
      medium,
      currentUser,
      isLoggedIn,

      logout() {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            isLoggedIn.value = false;
            currentUser.value = null;
            location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      },
    };
  },
};
</script>

<style></style>
