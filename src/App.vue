<script setup>
import NavBar from './components/NavBar.vue';
import hoverSound from "@/sounds/lily_atk_01.ogg";
import { ref, computed } from 'vue';
import { randomColor } from '@/services/randomColorProvider';

// Generate a random brand color on page load (HSL for pleasant saturation)

const colorToRender = ref(randomColor());

// Handler to update the color (called on hover / focus)
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

let unlocked = false
let lastPlay = 0

const unlockAudio = () => {
  const now = Date.now()
  if (now - lastPlay < 120) return
  lastPlay = now
  audio.currentTime = 0
  audio.volume = 0.25
  audio.play().catch(() => {})
}

window.addEventListener("click", unlockAudio)

</script>

<template>
  <NavBar/>
  <div class="main">
    <RouterView/>
  </div>
</template>

<style>
body {
  margin: 0;
  background: url("/src/images/PhotoGrid_Site_1770758216069.jpg") center / cover no-repeat fixed;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Add padding at bottom on mobile to account for fixed navbar */
@media (max-width: 1023px) {
  #app {
    padding-bottom: 70px;
  }
}

.main {
  flex: 1;
  margin: 0 auto;
  width: 100%;
  max-width: none; /* No limit */
}
</style>