<template>
  <q-page>
    <!--BACKGROUND PAGE-->

    <div class="img-bg-about flex-bg">
      <div class="border-bg text-center container text-h1">
        Hasta que uno no ha amado un animal, una parte del alma sigue sin
        despertar
        <br /><span class="span-title">- Anatole France -</span>
      </div>
    </div>

    <!--/BACKGROUND PAGE-->

    <!--SECTION ONE-->

    <section class="section-about q-pa-xl">
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
    <!--SECTION ONE-->

    <!--SECTION TWO-->
    <section class="section-about-two q-pa-xl">
      <div class="container">
        <div class="text-center text-h2 q-pb-lg">
          ¿Qué es <span class="span-title">SecondChance?</span>
        </div>
        <p class="text-justify q-mb-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque
          hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur
          laboriosam!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit
          consequatur laboriosam!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum,
          accusamus suscipit consequatur laboriosam!Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est
          numquam harum, accusamus suscipit consequatur laboriosam!adipisicing
          elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus
          suscipit consequatur laboriosam!Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est
          numquam harum, accusamus suscipit consequatur laboriosam!
        </p>
        <ul class="q-ma-none q-pa-none">
          <li style="--accent-color: #41516c">
            <div class="date">2002</div>
            <div class="title">Title 1</div>
            <div class="descr">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              itaque hic quibusdam fugiat est numquam harum, accusamus suscipit
              consequatur laboriosam!
            </div>
          </li>
          <li style="--accent-color: #fbca3e">
            <div class="date">2007</div>
            <div class="title">Title 2</div>
            <div class="descr">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              adipisci nobis nostrum vero nihil veniam.
            </div>
          </li>
          <li style="--accent-color: #e24a68">
            <div class="date">2012</div>
            <div class="title">Title 3</div>
            <div class="descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              minima consequuntur soluta placeat iure totam commodi repellendus
              ea delectus, libero fugit quod reprehenderit, sequi quo, et
              dolorum saepe nulla hic.
            </div>
          </li>
          <li style="--accent-color: #1b5f8c">
            <div class="date">2017</div>
            <div class="title">Title 4</div>
            <div class="descr">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              cumque.
            </div>
          </li>
          <li style="--accent-color: #4cadad">
            <div class="date">2022</div>
            <div class="title">Title 5</div>
            <div class="descr">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
              non.
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!--SECTION TWO-->

    <!--SECTION THREE-->
    <section class="section-three-about q-pa-xl">
      <div class="container">
        <div class="text-center text-h2">
          Quieres estar a la última de todas las novedades que se presentan a
          SecondChance?
          <span class="span-title"> Apuntate a nuestra Newsetter!</span>
          <div class="text-center inherit q-pt-xl">
            <router-link to="contact">
              <q-btn
                aria-label="Apuntate"
                icon-right="mdi-chevron-right"
                label="Apuntate"
              />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!--SECTION THREE-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
});
</script>
