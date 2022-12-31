<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step :name="1" title="Funcionamiento" icon="settings" :done="step > 1">
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.

        <!--SELECT-->
        <div class="q-pt-md" style="max-width: 300px">
          <div class="q-gutter-md">
            <q-badge
              v-if="model.length"
              color="primary"
              multi-line
              class="text-h5"
            >
              {{ model }}
            </q-badge>

            <q-select
              filled
              v-model="model"
              :options="options"
              label="Caracteristicas"
              multiple
              emit-value
              map-options
            >
              <template
                v-slot:option="{ itemProps, opt, selected, toggleOption }"
              >
                <q-item v-bind="itemProps">
                  <q-item-section>
                    <q-item-label v-html="opt.label"></q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-toggle
                      :model-value="selected"
                      @update:model-value="toggleOption(opt)"
                    ></q-toggle>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>
        <!--SELECT-->
      </q-step>

      <q-step :name="3" title="Ad template" icon="assignment">
        <div class="text-primary">{{ model }}</div>
        <div class="text-red">{{ personality }}</div>

        <q-btn @click="calc">we</q-btn>
      </q-step>

      <q-step :name="4" title="Create an ad" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 4 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            text-color="white"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMeta } from "quasar";
import { collection, getDocs } from "firebase/firestore";
import db from "../boot/db";

export default {
  setup() {
    const title = ref("SecondChance | Match"); // we define the "title" prop
    const personality = ref([]);
    const model = ref([]);

    useMeta(() => {
      return {
        // whenever "title" from above changes, your meta will automatically update
        title: title.value,
      };
    });

    return {
      personality,
      step: ref(1),
      model,
      options: [
        {
          label: "Bueno con gatos",
          value: "Bueno con gatos",
        },
        {
          label: "Bueno con niños",
          value: "Bueno con niños",
        },
        {
          label: "Bueno en casa",
          value: "Bueno en casa",
        },
        {
          label: "Bueno en el coche",
          value: "Bueno en el coche",
        },
        {
          label: "Cariñoso",
          value: "Cariñoso",
        },
        {
          label: "Bueno con otros perros",
          value: "Bueno con otros perros",
        },
        {
          label: "Bueno con otros animales",
          value: "Bueno con otros animales",
        },
        {
          label: "A veces ladro",
          value: "A veces ladro",
        },
        {
          label: "Amigable con extraños",
          value: "Amigable con extraños",
        },
        {
          label: "Me gusta pasear",
          value: "Me gusta pasear",
        },
        {
          label: "Jugetón",
          value: "Jugetón",
        },
        {
          label: "Timido",
          value: "Timido",
        },
        {
          label: "Cauteloso con extraños",
          value: "Cauteloso con extraños",
        },
        {
          label: "Independiente",
          value: "Independiente",
        },
      ],
    };
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "pets"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data().personality);
      this.personality.push(doc.data().personality);
    });
  },
};
</script>
