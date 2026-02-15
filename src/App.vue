<script setup>
import NavBar from './components/NavBar.vue';
import hoverSound from "@/sounds/lily_atk_01.ogg";

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

.card {
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 14px;
  padding: 18px;
  min-width: 0;
  box-sizing: border-box;

  /* Positioning */
  position: relative;

  /* Visual */
  background: transparent;
  border-radius: 16px;
  color: var(--vt-c-text-dark-2);
  text-decoration: none;

  /* Effects */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: 0.25s ease;
}

.main {
  flex: 1;
  margin: 0 auto;
  width: 100%;
  max-width: none; /* No limit */
}
</style>