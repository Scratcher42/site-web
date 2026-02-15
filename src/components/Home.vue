<script setup>
import { ref } from 'vue';

// Generate a random brand color on page load (HSL for pleasant saturation)
function randomBrand() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h} 70% 45%)`;
}

const colorToRender = ref(randomBrand());
</script>

<template>
    <h2>Accueil</h2>
    <div class="card" :style="{ '--color-to-render': colorToRender }">
      <img src="/src/images/lightX(5).png" alt="Photo de couverture" style="width: 100%; height: auto; border-radius: 8px;"/>
        <div class="text">
            <p>Bienvenue sur le site de ma chaîne ! Ici, tu pourras me connaître autrement que sur YouTube.
                N'hésite pas à aller faire un tour sur ma page Linktree pour découvrir tous mes réseaux sociaux et autres liens utiles !
            </p>
            <p>L'image de fond est fait par <a href="https://www.youtube.com/@spuraxe" target="blank_">Spuraxe</a> ! Go t'abonner</p>
            <p>Ce site est en beta : dites-moi ce qui ne vas et j'ajusterai en fonction...</p>
        </div>
    </div>
</template>

<style scoped>
img {
  max-width: 200px;
}

.card {
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 12px;
  border-radius: 12px;
  box-sizing: border-box;
  background: transparent;
  transition: transform 0.25s ease;
}

/* Hover effect should not scale content (no transform) */
.card:hover {
    transform: scale(1.02);
  background: color-mix(in srgb, var(--color-to-render) 30%, transparent);
  box-shadow:
    inset 0 0 10px color-mix(in srgb, var(--color-to-render) 0%, transparent),
    0 0 100px color-mix(in srgb, var(--color-to-render) 70%, transparent);
  z-index: 5;
}

.card img {
  max-width: 300px;
  height: auto;
  display: block;
}

.text {
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Make links on this page match the site's text color */
.text a {
  color: var(--color-text);
  text-decoration: underline;
}

.text a:visited {
  color: var(--color-text);
}
</style>