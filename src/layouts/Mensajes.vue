<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="row items-center no-wrap">
          <router-link class="text-white" to="/panelcontrol">
            SecondChance
          </router-link>
        </q-toolbar-title>

        <q-space />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-ripple v-for="link in links1" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item v-ripple v-for="link in links2" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              <router-link to="/panelcontrol"
                ><q-item-label class="text-secondary">{{
                  link.text
                }}</q-item-label></router-link
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-list class="q-ma-sm q-mt-md">
        <q-expansion-item
          v-for="(mail, index) in mail_data"
          :key="index"
          style="border-radius: 10px"
          popup
          header-class="bg-white"
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img :src="mail.avatar" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h4">{{ mail.name }}</q-item-label>
              <q-item-label class="text-h5">"{{ mail.subject }}"</q-item-label>
              <q-item-label class="text-h5">{{ mail.date }}</q-item-label>
            </q-item-section>
          </template>

          <q-separator />
          <q-card>
            <q-card-section>
              {{ mail.msg }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useMeta } from "quasar";
const links1 = [{ icon: "move_to_inbox", text: "Recibidos" }];
const links2 = [{ icon: "arrow_back", text: "Volver" }];

export default defineComponent({
  name: "Mail",
  setup() {
    const $q = useQuasar();

    const leftDrawerOpen = ref(false);
    const miniState = ref(false);

    const title = ref("SecondChance | Mensajes"); // we define the "title" prop
    useMeta(() => {
      return {
        // whenever "title" from above changes, your meta will automatically update
        title: title.value,
      };
    });
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      miniState,
      toogleMiniState() {
        miniState.value = !miniState.value;
      },

      links1,
      links2,

      mail_data: [
        {
          name: "Administración SecondChance",
          avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
          subject: "Bienvenida",
          date: "Enero 22, 2022",
        },
      ],
    };
  },
  mounted() {
    this.mail_data = this.mail_data.map(function (item) {
      item["msg"] = "Gracias por formar parte de SecondChance";
      return item;
    });
  },
});
</script>

<style></style>
