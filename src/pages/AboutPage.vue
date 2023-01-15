<template>
  <q-page>
    <!-- Section image top -->
    <div class="size-bg img-about flex-bg">
      <q-intersection transition="scale" class="container"
        ><div class="border-bg text-center text-h1">
          Hasta que uno no ha amado un animal, una parte del alma sigue sin
          despertar
          <br /><span class="span-title">- Anatole France -</span>
        </div></q-intersection
      >
    </div>

    <!--Section about -->
    <section class="section-about bg-white">
      <div class="container">
        <div class="flex-sobre-mi">
          <div class="sobre-mi-img">
            <img src="../assets/imagenes/sobre-mi.webp" alt="Sobre Mi" />
          </div>
          <div class="flex-name">
            <div class="text-h3">
              Jose Agudo Sabate
              <p class="text-h4 text-primary">Fundador de SecondChance</p>
              <q-separator color="primary" />
            </div>
            <p class="sobre-mi-p">
              Amante de los animales, activista y programador de profesión.
              Gracias a esta iniciativa ha podido mezclar sus dos grandes
              pasiones en un único proyecto que pretende dar una segunda
              oportunidad a todas esas mascotas que lo necesita.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--Section time line-->
    <section class="section-time-line">
      <div class="container">
        <div class="text-center text-h2 q-pb-lg">
          La historia de <span class="span-title">SecondChance</span>
        </div>
        <p class="q-pb-lg">
          SecondChance, el nombre de este proyecto, es una página web donde la
          adopción de mascotas es el principal motor motivacional y el objetivo
          que sigue. Un proyecto que permite hacer más accesible la adopción en
          todos los públicos a través de una herramienta moderna e intuitiva.
          Este proyecto nace desde el corazón y desde la motivación altruista
          por querer encontrar un hogar a esas mascotas que no lo tienen.
        </p>
      </div>

      <!--time line-->
      <div class="timer-section q-pt-xl">
        <div class="container">
          <div class="timer-container">
            <ul class="timer">
              <li class="step">
                <span>1</span>
                <div class="content">
                  <div class="text-h3 q-pb-md text-primary">2022</div>
                  <p>
                    Finalmente, después de muchos años de trabajo, SecondChance
                    sale al mercado con un objetivo claro: Facilitar la adopción
                    animal y reducir el número de mascotas abandonadas.
                  </p>
                </div>
              </li>
              <li class="step">
                <span>2</span>
                <div class="content">
                  <div class="text-h3 q-pb-md">2021</div>
                  <p>
                    2021 es un año importante para SecondChance. Durante este
                    tiempo el proyecto se consolida y se empieza a construir.
                  </p>
                </div>
              </li>
              <li class="step">
                <span>3</span>
                <div class="content">
                  <div class="text-h3 q-pb-md text-primary">2020</div>
                  <p>
                    Después de que l'autoría se especialice en programación,
                    SecondChance empieza a crearse a partir de un primer diseño
                    aproximado. El proyecto se ve interrumpido por la pandemia
                    Covid.
                  </p>
                </div>
              </li>
              <li class="step">
                <span>4</span>
                <div class="content">
                  <div class="text-h3 q-pb-md">2019</div>
                  <p>
                    A través del recorrido formativo y de la motivación,
                    SecondChace empieza a estructurarse como proyecto.
                  </p>
                </div>
              </li>
              <li class="step">
                <span>5</span>
                <div class="content">
                  <div class="text-h3 q-pb-md text-primary">2018</div>
                  <p>
                    SecondChance nace en el imaginario de Jose Agudo, autor del
                    proyecto, al perder y sufrir la perdida de su mascota.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!--Section newsletter-->
    <section class="section-news bg-white">
      <div class="container">
        <div class="text-center text-h2">
          ¿Quieres estar a la última de todas las novedades que se presentan en
          SecondChance?
          <span class="span-title">¡Apúntate a nuestra Newsletter!</span>
          <div class="q-pt-lg">
            <q-btn
              aria-label="Apuntate"
              icon-right="mdi-chevron-right"
              label="Apúntate"
              @click="prompt"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useMeta } from "quasar";
import { ref } from "vue";
export default {
  setup() {
    const $q = useQuasar();

    //Plugin Meta
    //Modifica el títol de la pàgina
    //Millora el SEO del lloc web
    const title = ref("SecondChance | Nosotros");
    useMeta(() => {
      return {
        title: title.value,
      };
    });
    return {
      prompt() {
        //Dialog per introduir el correu electrònic
        $q.dialog({
          title: "Introduzca un correo electrónico",
          color: "white",

          prompt: {
            model: "",
            isValid: (val) => val.length > 0,
            type: "email",
          },
          cancel: true,
          persistent: true,
        }).onOk((data) => {
          $q.notify({
            message: "Petición enviada",
            type: "positive",
          });
        });
      },
    };
  },
};
</script>
