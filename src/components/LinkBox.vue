<script setup>
import hoverSound from "@/sounds/lily_atk_01.ogg"
const props = defineProps({
    socialMediaImage:{
        type: String,
        required: false
    },
    socialMediaLink: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false
    }
});

const audio = new Audio(hoverSound);

const playHover = () => {
  audio.currentTime = 0
  audio.volume = 0.25
  audio.play().catch(() => {})
}

</script>

<template>
    <a class="card"  :href="props.socialMediaLink" target="_blank" :style="{ '--brand': props.color }" @mouseenter="playHover">
        <div class="logo">
            <img v-if="props.socialMediaImage" :src="props.socialMediaImage"/>
        </div>
        <p> {{ props.text }} </p>
    </a>
</template>

<style scoped>

.card:hover {
  transform: scale(1.06);
  background: color-mix(in srgb, var(--brand) 30%, transparent);
  box-shadow:
    inset 0 0 10px color-mix(in srgb, var(--brand) 0%, transparent),
    0 0 100px color-mix(in srgb, var(--brand) 70%, transparent);
  z-index: 5;
}

.logo {
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;

  /* Visual */
  overflow: hidden;
  border-radius: 18px;
}

.logo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.card p {
  font-size: clamp(16px, 2.2vw, 22px);
  font-weight: 600;
  margin: 0;
  text-align: center;
}

@media (max-width: 480px) {
  .card {
    padding: 12px;
    gap: 10px;
  }

  .logo {
    padding: 12px;
    border-radius: 12px;
  }
}
</style>