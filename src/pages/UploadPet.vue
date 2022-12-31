<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step :name="1" title="Información" icon="settings" :done="step > 1">
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title="Subir una mascota"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-form class="q-gutter-lg" @submit="upload">
          <div class="form-item">
            <q-card>
              <q-card-section class="q-pa-sm">
                <q-list class="row">
                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-input
                        square
                        clearable
                        required
                        type="text"
                        label="Nombre"
                        v-model="name"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-input
                        square
                        clearable
                        required
                        type="number"
                        label="Edad"
                        v-model="age"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-input
                        square
                        clearable
                        required
                        type="text"
                        label="Localidad"
                        v-model="location"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-select
                        square
                        clearable
                        required
                        label="Especie"
                        :options="optionSpecies"
                        v-model="species"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-input
                        square
                        clearable
                        required
                        label="Raza"
                        type="text"
                        v-model="race"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-select
                        type="text"
                        square
                        clearable
                        required
                        label="Sexo"
                        :options="optionSex"
                        v-model="sex"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-select
                        square
                        clearable
                        required
                        label="Medida"
                        :options="optionSize"
                        v-model="size"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-input
                        type="text"
                        square
                        clearable
                        required
                        label="Descripción corta"
                        v-model="description"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-input
                        type="textarea"
                        square
                        clearable
                        required
                        label="Biografia"
                        v-model="bio"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-select
                        square
                        clearable
                        v-model="personality"
                        :options="optionPersonality"
                        label="Personalidad"
                        required
                        multiple
                        emit-value
                        map-options
                      >
                        <template
                          v-slot:option="{
                            itemProps,
                            opt,
                            selected,
                            toggleOption,
                          }"
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
                    </q-item-section>
                  </q-item>

                  <q-item
                    class="col-lg-12 col-md-6 col-sm-12 col-xs-12 items-center"
                  >
                    <div>Me entregan:</div>
                    <div class="q-gutter-md">
                      <q-checkbox v-model="vaccinated" label="Vacunado" />

                      <q-checkbox v-model="dewormed" label="Desparasitado" />

                      <q-checkbox v-model="sterilized" label="Esterilizado" />

                      <q-checkbox v-model="microchip" label="Microchip" />
                    </div>
                  </q-item>

                  <q-item class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                    <q-item-section>
                      <q-input
                        type="textarea"
                        square
                        clearable
                        required
                        label="Informacion adicional"
                        v-model="notes"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                    <q-file
                      v-model="image_url"
                      label="Subir imagen"
                      square
                      clearable
                      accept=".jpg, image/*"
                      required
                      style="max-width: 300px"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" />
                      </template>
                    </q-file>
                  </q-item>
                </q-list>
                <div align="right">
                  <q-btn type="submit" color="primary" label="Subir" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-form>
      </q-step>

      <q-step :name="3" title="Finalizar" icon="add_comment">
        <div v-if="flag === true">
          Try out different ad text to see what brings in the most customers,
          and learn how to enhance your ads using features like ad extensions.
          If you run into any problems with your ads, find out how to tell if
          they're running and how to resolve approval issues.
        </div>
        <div v-else>No has subido ninguna mascota.</div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            v-if="step != 3"
            @click="$refs.stepper.next()"
            color="primary"
            label="Continuar"
          />

          <q-btn
            v-if="step > 1"
            flat
            color="white"
            @click="$refs.stepper.previous()"
            label="Atrás"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

import { uuid } from "vue-uuid";

import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  uploadBytes,
  getDownloadURL,
  ref as firebaseStorageRef,
} from "firebase/storage";

import { useQuasar } from "quasar";
import { useMeta } from "quasar";
import db from "../boot/db";

export default {
  setup() {
    let timer;
    const name = ref("");
    const age = ref("");
    const location = ref("");
    const species = ref("");
    const race = ref("");
    const sex = ref("");
    const size = ref("");
    const description = ref("");
    const bio = ref("");
    const personality = ref([]);
    const vaccinated = ref(false);
    const dewormed = ref(false);
    const sterilized = ref(false);
    const microchip = ref(false);
    const notes = ref("");
    const status = ref(false);
    const image_url = ref(null);
    const handle_status = ref([]);
    const info_notes = ref([]);
    const flag = ref(false);

    const $q = useQuasar();
    const title = ref("SecondChance | Subir una mascota"); // we define the "title" prop
    useMeta(() => {
      return {
        // whenever "title" from above changes, your meta will automatically update
        title: title.value,
      };
    });

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });

    function photo() {
      if (image_url.value === null) {
        image_url.value = "";
      } else {
        const storage = getStorage();
        const photoRef = firebaseStorageRef(
          storage,
          "pets/" + image_url.value.name
        );
        return uploadBytes(photoRef, image_url.value).then(() =>
          getDownloadURL(photoRef)
        );
      }
    }

    return {
      async upload() {
        const handle_status_new = {
          vaccinated: vaccinated.value,
          dewormed: dewormed.value,
          sterilized: sterilized.value,
          microchip: microchip.value,
        };
        const handle_info = JSON.parse(JSON.stringify(handle_status_new));
        info_notes.value.push(notes.value);

        let url = await photo();

        $q.loading.show({
          message: "Subiendo tu mascota a nuestra base de datos",
        });
        timer = setTimeout(() => {
          $q.loading.hide();
          timer = void 0;
          $q.notify({
            message: "Mascota subida correctamente",
            type: "positive",
          });
        }, 4000);

        const docRef = await addDoc(collection(db, "pets"), {
          age: age.value,
          bio: bio.value,
          handle_status: handle_info,
          id: uuid.v4(),
          image_url: url,
          info_notes: info_notes.value,
          name: name.value,
          personality: personality.value,
          race: race.value,
          sex: sex.value,
          short_description: description.value,
          size: size.value,
          species: species.value,
          status: status.value,
          location: location.value,
        });

        console.log("Document written with ID: ", docRef.id);
      },
      photo,
      name,
      age,
      location,
      species,
      race,
      sex,
      size,
      description,
      bio,
      personality,
      vaccinated,
      image_url,
      sterilized,
      microchip,
      dewormed,
      flag,

      notes,
      step: ref(1),

      optionSpecies: ["Gato", "Perro"],
      optionSex: ["Macho", "Hembra"],
      optionSize: ["Pequeño", "Mediano", "Grande"],

      optionPersonality: [
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
};
</script>
