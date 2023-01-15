<template>
  <section>
    <div class="container">
      <div class="text-h2 text-center">
        Tienes alguna <span class="span-title">duda?</span>
      </div>

      <details class="details-comp q-mt-lg">
        <summary class="summary-colapse">¿Qué es esta web?</summary>
        <p>
          En esta web puedes encontrar animales en adopción publicados tanto por
          particulares como por protectoras y asociaciones. Ya sea por un motivo
          u otro, aquí encontrarás mascotas de todo tipo esperando a ser
          adoptadas. Mascotas procedentes de una camada, animales encontrados en
          la calle, mascotas que necesitan un nuevo hogar… lee la descripción de
          cada mascota para conocerlo todo sobre cada una.
        </p>
      </details>

      <details class="details-comp">
        <summary class="summary-colapse">
          ¿Cuánto dura un proceso de adopción?
        </summary>
        <p>
          Un proceso de adopción puede durar entre tres y cuatro semanas desde
          el momento que se envía la documentación. Nuestro equipo tiene la
          tarea de revisar toda la documentación de forma exhaustiva para
          comprobar que la adopción cuenta con todas las garantías posibles.
        </p>
      </details>

      <details class="details-comp">
        <summary class="summary-colapse">
          ¿Que pasa si tengo problemas con mi mascota?
        </summary>
        <p>
          Raras veces hemos tenido problemas con las mascotas después de ser
          adoptadas. No obstante esto, estudiaremos cada casa y tomaremos las
          medidas necesarias que se ajusten mejor a las dos partes implicadas.
        </p>
      </details>

      <details class="details-comp">
        <summary class="summary-colapse">
          ¿Es gratis? ¿Tengo que pagar algo?
        </summary>
        <p>
          Nuestra web es totalmente gratuita. Puedes registrarte y publicar
          tantas adopciones como quieras sin pagar absolutamente nada. No
          obstante, tenemos un apartado de Donaciones para los que quieran
          ayudarnos a crecer.
        </p>
      </details>

      <details class="details-comp">
        <summary class="summary-colapse">
          ¿Puedo eliminar una mascota publicada?
        </summary>
        <p>
          La gestión de las mascotas corre a cargo del equipo de SecondChance.
          Puedes subir una mascota a través de la opción
          <b>Subir una mascota</b> y nuestro equipo estudiará el caso. Si deseas
          hacer alguna gestión a cerca de alguna de nuestras mascotas, puedes
          ponerte en contacto con nosotros indicando el problema o sugerencia.
        </p>
      </details>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useMeta } from "quasar";
export default {
  setup() {
    //Plugin Meta
    //Modifica el títol de la pàgina
    //Millora el SEO del lloc web
    const title = ref("SecondChance | FAQ");
    useMeta(() => {
      return {
        title: title.value,
      };
    });
  },
};
</script>
