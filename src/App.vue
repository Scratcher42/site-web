<script setup>
import NavBar from './components/NavBar.vue';
import MyFooter from './components/MyFooter.vue';
import { onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

function updateColors() {
  const isMobile = window.innerWidth < 1024
  const thresholdMid = isMobile ? 0.35 : 0.40
  const thresholdDark = isMobile ? 0.6 : 0.6

  document.querySelectorAll('h1, h2, h3, p, a, span, li').forEach(el => {
    const rect = el.getBoundingClientRect()
    const elMiddle = rect.top + rect.height / 2
    const ratio = elMiddle / window.innerHeight

    el.classList.remove('mid-zone', 'dark-zone') // reset propre

    if (ratio > thresholdDark) {
      el.classList.add('dark-zone')
    } else if (ratio > thresholdMid) {
      el.classList.add('mid-zone')
    }
  })
}

function updateBackgroundScroll() {
  if (window.innerWidth >= 1024) return
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollProgress = docHeight > 0 ? window.scrollY / docHeight : 0
  document.body.style.backgroundPosition = `${scrollProgress * 100}% center`
}

onMounted(async () => {
  if (isIOS()) {
    document.body.style.backgroundSize = 'auto 100dvh'
    document.body.style.backgroundAttachment = 'scroll'
  }
  await nextTick()
  updateColors()
  updateBackgroundScroll()
  window.addEventListener('scroll', updateColors, { passive: true })
  window.addEventListener('scroll', updateBackgroundScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateColors)
  window.removeEventListener('scroll', updateBackgroundScroll)
})

watch(route, async () => {
  await nextTick()
  updateColors()
  updateBackgroundScroll()
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
  background: url("/src/images/PhotoGrid_Site_1770758216069.jpg") left center / cover no-repeat fixed;
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
  padding: 1rem;
}
</style>