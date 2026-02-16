<script setup>
import { ref, computed } from 'vue';
import { randomColor } from '@/services/randomColorProvider';

const colorToRender = ref(randomColor());

function changeColor() {
  colorToRender.value = randomColor();
}

const cardAttrs = computed(() => ({
  style: { '--color-to-render': colorToRender.value },
  tabindex: 0,
}));

const cardListeners = {
  mouseenter: changeColor,
  click: changeColor,
};
</script>

<template>
    <h2>Oups : Page non trouvée</h2>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
        <img src="/src/images/emote_hog_rider_confused.png" alt="Page non trouvée" style="width: 100%; height: auto; border-radius: 8px;"/>
      <h3></h3>
        <p>Désolé, la page que tu cherches n'existe pas.</p>
        <p>Es-tu sûr d'avoir le bon lien ?</p>
    </article>
</template>

<style scoped>
.card {
  width: 100%;
  min-width: 100%;
  margin: 0;
}
</style>