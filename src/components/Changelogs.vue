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
    <h2>Changelogs</h2>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>V 0.3 : 19/08/2026</h3>
        <div class="text">
            <ul>
                <li>Meilleure lisibilité (équilibrage toujours possible)</li>
                <li>Équilibrage des couleurs</li>
            </ul>
        </div>
      </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>V 0.2 : 17/06/2026</h3>
        <div class="text">
            <ul>
                <li>Fix de la page Coup de coeur (j'espère : c'est une beta)</li>
            </ul>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>V 0.1 (beta) :17/02/2026</h3>
        <div class="text">
            <ul>
                <li>Première publication</li>
            </ul>
        </div>
    </article>
</template>
