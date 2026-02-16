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
    <h2>Accueil</h2>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Présentation du site</h3>
        <div class="text">
            <p>Bienvenue sur le site de ma chaîne ! Ici, tu pourras me connaître autrement que sur YouTube.
                N'hésite pas à aller faire un tour sur ma page Linktree pour découvrir tous mes réseaux sociaux et autres liens utiles !
            </p>
            <p>L'image de fond est fait par <a href="https://www.youtube.com/@spuraxe" target="blank_">Spuraxe</a> ! Go t'abonner</p>
            <p>Ce site est en beta : dites-moi ce qui ne vas et j'ajusterai en fonction...</p>
        </div>
        <img src="/src/images/lightX(5).png" alt="Photo de couverture" style="width: 100%; height: auto; border-radius: 8px;"/>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Ce que je fais</h3>
      <div class="text">
        <p>Je fais des vidéos dédiées aux jeux Supercell, de gaming sur Youtube.</p>
        <p>Et bientôt, des vidéos sur la vulgarisation des notions en informatique.</p>
      </div>
    </article>
</template>

<style scoped>
article {
  width: 100%;
  min-width: 100%;
  margin: 2rem 0;
}
</style>