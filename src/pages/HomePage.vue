<template>
  <q-page>
    <!-- Section image top -->

    <div class="size-bg img-home flex-bg">
      <q-intersection transition="scale" class="container">
        <div class="border-bg text-center text-h1">
          Un país se puede juzgar por la forma en que trata a sus animales
          <br /><span class="span-title">- Mahatma Gandhi -</span>
        </div>
      </q-intersection>
    </div>

    <!--Carousel-->
    <section class="section-pets">
      <div class="text-h2 text-center">
        ¡Mascotas adorables
        <span class="span-title">cerca de ti!</span>
        <p class="q-pt-lg">
          ¡Consulta la ficha de los animales en adopción para conocerlos mejor!
        </p>
      </div>

      <div class="carousel">
        <Carousel :pets="pets" />
        <div class="q-pt-lg">
          <q-btn
            aria-label="Más adopciones"
            icon-right="mdi-chevron-right"
            label="Más adopciones"
            to="/adoptar"
          />
        </div>
      </div>
    </section>

    <!-- Section secondchance -->
    <section class="section-secondchance bg-white">
      <div class="container flex-section-secondchance">
        <div class="flex-left">
          <div class="text-h2 q-pb-lg">
            ¿Qué es <span class="span-title">SecondChance?</span>
          </div>
          <p>
            SecondChance es un proyecto que nace desde el corazón y la
            profesionalidad con la finalidad de facilitar la adopción animal.
            SecondChance apuesta por el respeto, la fidelidad y el amor hacia
            los animales y así quiere hacerlo extensible a la población, dando
            una segunda oportunidad a esas mascotas que lo necesitan.
          </p>
        </div>
        <div class="flex-right">
          <q-knob
            readonly
            v-model="pets.length"
            show-value
            size="100px"
            :thickness="0.22"
            color="primary"
            track-color="green-1"
            class="text-orange q-ma-lg text-weight-medium"
            aria-label="knob"
          ></q-knob>
          <div class="text-center text-h4">Adopciones</div>
        </div>

        <div>
          <q-knob
            readonly
            show-value
            v-model="adoptados"
            size="100px"
            :thickness="0.22"
            color="primary"
            track-color="green-1"
            class="text-orange q-ma-lg text-weight-medium"
            aria-label="knob"
          ></q-knob>
          <div class="text-center text-h4">Adoptados</div>
        </div>
        <div>
          <q-knob
            readonly
            v-model="afiliados"
            show-value
            size="100px"
            :thickness="0.22"
            color="primary"
            track-color="green-1"
            class="text-orange q-ma-lg text-weight-medium"
            aria-label="knob"
          ></q-knob>
          <div class="text-center text-h4">Afiliados</div>
        </div>
      </div>
    </section>

    <!-- Section why -->
    <section class="section-why">
      <div class="container">
        <div class="text-center text-h2">
          ¿Por qué
          <span class="span-title">adoptar?</span>
        </div>
        <div class="flex-first q-pt-lg">
          <div class="img-section-why">
            <img alt="img_salvar" src="../assets/imagenes/safe.webp" />
          </div>
          <div class="text-section-why">
            <div class="text-h3 q-pl-lg q-pt-lg">
              Salvar una <span class="span-title">vida</span>
            </div>
            <p class="q-pl-lg q-pt-lg">
              Según la Fundación Affinity, en el año 2020, alrededor de 286.153
              perros y gatos fueron abandonados o se perdieron. Esta cifra,
              equivale a un descenso del 6,6% respecto al año 2019. A estos
              datos, se le agrega que en el año 2021 fueron abandonados 285.554
              animales de compañía. Las cifras aún son alarmantes, por eso,
              SecondChance quiere contribuir a facilitar y visibilizar la
              adopción de mascotas a través de este nuevo proyecto. Salvar una
              vida, dar una segunda oportunidad u ofrecer un nuevo hogar es el
              motor principal y el cometido de este proyecto. Deseamos
              contribuir en la disminución de estas cifras tan alarmantes que,
              aunque la tendencia es que disminuyan poco a poco, siguen siendo
              cifras muy preocupantes.
            </p>
          </div>
        </div>
        <div class="flex-second">
          <div class="img-section-why">
            <img alt="img_mejorar" src="../assets/imagenes/help.webp" />
          </div>

          <div class="text-section-why">
            <div class="text-left text-h3 q-pt-lg">
              Amor <span class="span-title">incondicional</span>
            </div>
            <p class="q-pr-lg q-pt-lg">
              Uno de los beneficios de adoptar, y el más obvio, de convertirse
              en "colega" de una mascota es el amor incondicional y la compañía
              de por vida. La afortunada mascota que ha sido adoptada no dudará
              en demostrar su gratitud en todo momento con todo su afecto. Si
              bien en cierto que al principio muchas se muestran más inseguras o
              miedosas, conforme se vayan acostumbrando a su nuevo hogar, nunca
              olvidarán el sentimiento de ese momento en el que se le dio una
              segunda oportunidad de formar parte de una familia. Además, La
              mayoría de los propietarios de mascotas tienen claras las alegrías
              que conlleva compartir sus vidas con un amigo peludo, pero las
              mascotas también aportan grandes beneficios para la salud. Un
              perro o un gato feliz puede mejorar el estado anímico de una
              persona y ayudar a su salud mental en general.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section collaborate -->
    <section class="section-collaborate bg-white">
      <div class="text-center text-h2">
        Colaborar con
        <span class="span-title">nosotros</span>
      </div>
      <div class="row-section-collaborate q-pt-lg container">
        <div class="col-section-collaborate">
          <!-- Contact card -->
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa fa-paw"></i>
            </div>
            <div class="title-h3 text-h3">Adoptar</div>
            <p>
              En SecondChance tendrás la oportunidad de empezar una nueva vida
              con una gran mascota a tu lado. ¡No lo dudes y adopta con
              nosotros!
            </p>
          </div>
        </div>
        <div class="col-section-collaborate">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-hand-holding-heart"></i>
            </div>
            <div class="title-h3 text-h3">Donaciones</div>
            <p>
              ¡Puedes ayudarnos realizando donaciones económicas para que el
              proyecto siga ayudando a esas mascotas que más lo necesitan!
            </p>
          </div>
        </div>
        <div class="col-section-collaborate">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-house"></i>
            </div>
            <div class="title-h3 text-h3">Protectoras</div>
            <p>
              Si eres una protectora y quieres colaborar con nosotros, no lo
              dudes y ponte en contacto con nosotros lo antes posible. ¡Te
              ayudaremos!
            </p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Carousel from "../components/Carousel.vue";
import { getAllPets } from "../boot/db";
import { ref } from "vue";
import { useMeta } from "quasar";
export default defineComponent({
  name: "HomePage",
  components: { Carousel },

  data() {
    //Plugin Meta
    //Modifica el títol de la pàgina
    //Millora el SEO del lloc web
    const title = ref("SecondChance | Inicio");
    useMeta(() => {
      return {
        title: title.value,
      };
    });
    return {
      pets: [],
      adoptados: 2,
      afiliados: 3,
    };
  },

  //Funció que fa la crida de la funció que recupera els "pets" de Firebase
  mounted() {
    getAllPets().then((pets) => {
      this.pets = pets;
    });
  },
});
</script>
