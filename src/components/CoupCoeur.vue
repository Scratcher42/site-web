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
    <h2>Coups de coeur</h2>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Mes coups de coeur du moment</h3>
        <div class="text">
            <p>Arrive à la prochaine version du site</p>
        </div>
    </article>
</template>