<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <router-link to="/" class="text-white"> SecondChance </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list bordered padding class="rounded-borders text-primary">
        <router-link to="/panelcontrol/perfil">
          <q-item clickable v-ripple active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>Perfil</q-item-section>
          </q-item>
        </router-link>

        <q-item clickable v-ripple active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section>Mensajes</q-item-section>
        </q-item>

        <router-link to="/panelcontrol/favoritos"
          ><q-item clickable v-ripple active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="mdi-heart" />
            </q-item-section>

            <q-item-section>Animales favoritos</q-item-section>
          </q-item></router-link
        >

        <q-item clickable v-ripple active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="mdi-fire" />
          </q-item-section>

          <q-item-section>Mach animales</q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item clickable v-ripple active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>Opciones de perfil</q-item-section>
        </q-item>

        <q-item clickable v-ripple active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>

          <q-item-section>Ayuda</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
