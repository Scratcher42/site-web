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
  <header>
    <NavBar class="nav"/>
  </header>
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

header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-background);
  display: flex;
  justify-content: center;
}

.main,
nav {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.main {
  flex: 1;
}
</style>
