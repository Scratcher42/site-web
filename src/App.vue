<script setup>
import NavBar from './components/NavBar.vue';
import MyFooter from './components/MyFooter.vue';
import { onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

function updateColors() {
  document.querySelectorAll('.card, h1, h2').forEach(el => {
    const rect = el.getBoundingClientRect()
    const elMiddle = rect.top + rect.height / 2
    const ratio = elMiddle / window.innerHeight
    const t = Math.max(0, Math.min(1, (ratio - 0.35) / (0.75 - 0.35)))
    el.style.setProperty('--scroll-t', t)
  })
}

watch(route, async () => {
  await nextTick()
  updateColors()
})

onMounted(async () => {
  await nextTick()
  updateColors()
  window.addEventListener('scroll', updateColors, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateColors)
})
</script>

<template>
  <NavBar/>
  <div class="main">
    <RouterView/>
  </div>
  <MyFooter/>
</template>

<style>
body {
  margin: 0;
  background: url("/src/images/PhotoGrid_Site_1770758216069.jpg") center / cover no-repeat fixed;
}

#app {
  display: flex;
  flex-direction: column;
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
  max-width: none;
  padding: 2rem;
}
</style>