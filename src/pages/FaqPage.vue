<template>
  <section>
    <div class="container">
      <div class="text-h2 text-center">
        Tienes alguna <span class="span-title">duda?</span>
      </div>

      <details class="details-comp q-mt-lg">
        <summary class="summary-colapse">Titulo aqui</summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam
          excepturi itaque impedit quos. Expedita quis commodi tempore, quam
          laboriosam rerum ratione praesentium quia iusto dolore est asperiores
          quasi aliquam?
        </p>
      </details>

      <details class="details-comp">
        <summary class="summary-colapse">Titulo aqui</summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam
          excepturi itaque impedit quos. Expedita quis commodi tempore, quam
          laboriosam rerum ratione praesentium quia iusto dolore est asperiores
          quasi aliquam?
        </p>
      </details>

      <details class="details-comp">
        <summary class="summary-colapse">Titulo aqui</summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam
          excepturi itaque impedit quos. Expedita quis commodi tempore, quam
          laboriosam rerum ratione praesentium quia iusto dolore est asperiores
          quasi aliquam?
        </p>
      </details>

      <details class="details-comp">
        <summary class="summary-colapse">Titulo aqui</summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam
          excepturi itaque impedit quos. Expedita quis commodi tempore, quam
          laboriosam rerum ratione praesentium quia iusto dolore est asperiores
          quasi aliquam?
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
    const title = ref("SecondChance | FAQ"); // we define the "title" prop
    useMeta(() => {
      return {
        // whenever "title" from above changes, your meta will automatically update
        title: title.value,
      };
    });

    return {
      step: ref(1),
    };
  },
};
</script>
