<template>
  <q-page>
    <!-- Section image top -->
    <div class="size-bg img-about flex-bg">
      <div class="border-bg text-center container text-h1">
        Hasta que uno no ha amado un animal, una parte del alma sigue sin
        despertar
        <br /><span class="span-title">- Anatole France -</span>
      </div>
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
              Jose Agudo
              <p class="text-h4 text-primary">Fundador de SecondChance</p>
              <hr />
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
          <span class="span-title"> Apuntate a nuestra Newsetter!</span>
          <div class="q-pt-lg">
            <q-btn
              aria-label="Apuntate"
              icon-right="mdi-chevron-right"
              label="Apuntate"
              to="/contactar"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
});
</script>
