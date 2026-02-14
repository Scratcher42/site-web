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
    <a class="social"  :href="props.socialMediaLink" target="_blank" :style="{ '--brand': props.color }" @mouseenter="playHover">
        <div class="logo">
            <img v-if="props.socialMediaImage" :src="props.socialMediaImage"/>
        </div>
        <p> {{ props.text }} </p>
    </a>
</template>

<style scoped>
.social {
  background: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transition: .25s ease;
  position: relative;
  display: flex;
    align-items: center;      
    justify-content: center;
    text-decoration: none;
    color: var(--vt-c-text-dark-2);
    height: 100%;
    flex-direction: column;
    gap: 14px;
    padding: 18px;
}

.social:hover {
  transform: scale(1.06);
  background: color-mix(in srgb, var(--brand) 30%, transparent);
    box-shadow: 
    inset 0 0 10px color-mix(in srgb, var(--brand) 0%, transparent),
    0 0 100px color-mix(in srgb, var(--brand) 70%, transparent);
    z-index: 5;
}

.logo {
    width: 300px;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    padding: 20px;
    box-sizing: border-box;
}

.logo img {
    max-width: 90%;
    max-height: 90%;
    display: block;
    object-fit: contain;
}

.social p {
    font-size: 22px;      
    font-weight: 600;     
    margin: 0;            
    text-align: center;
}
</style>