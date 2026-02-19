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
    <h2>Changelogs</h2>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>V 0.4 : 19/02/2026</h3>
        <div class="text">
            <ul>
                <li>Meilleure lisibilité du site (mobile notamment) :
                <ul>
                    <li>Le changement de couleur du texte se fait selon le placement de celui-ci et non celui du composant</li>
                    <li>Le changement de couleur n'est plus progressif selon la position du composant, mais se fait sur la durée et par paliers (3)</li>
                    <li>Ajout d'un cadre autour les cards et augmentation de l'effet du flou</li>
                </ul>  
                </li> 
                <li>Linktree :
                <ul>
                  <li>Équilibrage du volume sonore sur le linktree : les sons sont moins forts</li>
                  <li>Cadre pour les logos</li>
                </ul>
              </li>
            </ul>
            <p>Le lien du site est donné à une poignée de personnes. Si tu lis ça, tu fais partie des gens qui ont été invités à tester le site.</p>
            <p>Merci pour ton aide au développement du site ! J'essaye toujours d'apporter une amélioration, visuelle notamment</p>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>V 0.3.1 : 19/02/2026</h3>
        <div class="text">
            <ul>
                <li>Fix le rechargement de la page qui ramenait à la page d'accueil</li>
                <li>Fix des couleurs des textes qui se mettaient à jour qu'au scroll</li>
                <li>Correction des dates des changelogs</li>
            </ul>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>V 0.3 : 19/02/2026</h3>
        <div class="text">
            <ul>
                <li>Meilleure lisibilité (équilibrage toujours possible)</li>
                <li>Équilibrage des couleurs</li>
                <li>Fix du reload de la page provoquant une erreur 404 (normalement)</li>
            </ul>
        </div>
      </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>V 0.2 : 17/02/2026</h3>
        <div class="text">
            <ul>
                <li>Fix de la page Coup de coeur (j'espère : c'est une beta)</li>
            </ul>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>V 0.1 (beta) :17/02/2026</h3>
        <div class="text">
            <ul>
                <li>Première publication</li>
            </ul>
        </div>
    </article>
</template>
