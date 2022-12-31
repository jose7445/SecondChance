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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ac eleifend eros, quis placerat tellus. Morbi vitae libero eget
              risus mattis euismod. Vestibulum ac finibus nunc, id facilisis
              est. Nam consequat egestas neque sit amet tempus. In hac habitasse
              platea dictumst.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--Section time line-->
    <section class="section-time-line">
      <div class="container">
        <div class="text-center text-h2 q-pb-lg">
          ¿Qué es <span class="span-title">SecondChance?</span>
        </div>
        <p class="q-pb-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque
          hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur
          laboriosam!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit
          consequatur laboriosam!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum,
          accusamus suscipit consequatur laboriosam!Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est
          numquam harum, accusamus suscipit consequatur laboriosam!adipisicing
          elit.
        </p>
      </div>

      <!--time line-->
      <div class="timer-section">
        <div class="container">
          <div class="timer-container">
            <ul class="timer">
              <li class="step">
                <span>1</span>
                <div class="content">
                  <div class="text-h3 q-pb-md text-primary">2022</div>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante.
                  </p>
                </div>
              </li>
              <li class="step">
                <span>2</span>
                <div class="content">
                  <div class="text-h3 q-pb-md">2021</div>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante.
                  </p>
                </div>
              </li>
              <li class="step">
                <span>3</span>
                <div class="content">
                  <div class="text-h3 q-pb-md text-primary">2020</div>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante.
                  </p>
                </div>
              </li>
              <li class="step">
                <span>4</span>
                <div class="content">
                  <div class="text-h3 q-pb-md">2019</div>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante.
                  </p>
                </div>
              </li>
              <li class="step">
                <span>5</span>
                <div class="content">
                  <div class="text-h3 q-pb-md text-primary">2018</div>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante.
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
          Quieres estar a la última de todas las novedades que se presentan a
          SecondChance?
          <span class="span-title"> Apuntate a nuestra Newsletter!</span>
          <div class="q-pt-lg">
            <q-btn
              aria-label="Apuntate"
              icon-right="mdi-chevron-right"
              label="Apuntate"
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
    const title = ref("SecondChance | Nosotros"); // we define the "title" prop
    useMeta(() => {
      return {
        // whenever "title" from above changes, your meta will automatically update
        title: title.value,
      };
    });
    return {
      prompt() {
        $q.dialog({
          title: "Introduzca un correo electronico",
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
            message: "Peticion enviada",
            type: "positive",
          });
        });
      },
    };
  },
};
</script>
