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
    <h2>Mentions légales</h2>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Droits d'auteur</h3>
        <div class="text">
            <p>Les droits d'auteur de base de ce site appartiennent à Scratche42 (loi sur le droit d'auteur). Il s'applique sur le texte contenu sur ce site notamment. Toute reproduction sans modification est interdite.</p>
            <p>Cependant, le <a href="https://github.com/Scratcher42/site-web" target="_blank">code source est disponible</a>. En cas de republication avec modification du contenu, veuillez mentionner le site et son auteur.</p>
            <p>Toute ressemblance à un autre site ou application serait purement fortuite.</p>
        </div>
        <div class="text">
            <p>Les images utilisées sur ce site sont utilisées avec la permission de leurs auteurs respectifs, soit sont utilisées partout. Si vous êtes l'auteur d'une image utilisée sur ce site et que vous souhaitez que celle-ci soit retirée, veuillez me contacter sur Discord</p>
            <p>Certaines images sont des logos connus et revienntent à leurs propriétaires respectifs. D'autres éléments sont des sons ou images.</p>
            <p>L'image de fond a été créée par <a href="https://www.youtube.com/@spuraxe" target="blank_">Spuraxe</a> et les droits lui reviennent</p>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Contenu du site</h3>
        <div class="text">
            <p>Le contenu de ce site est fourni à titre informatif uniquement. Je ne garantis pas l'exactitude, la fiabilité ou l'exhaustivité du contenu de ce site.</p>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Liens externes</h3>
        <div class="text">
            <p>Ce site peut contenir des liens vers des sites externes. Je ne suis pas responsable du contenu de ces sites et je n'approuve pas nécessairement les opinions exprimées sur ces sites.</p>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Responsabilité</h3>
        <div class="text">
            <p>Je ne suis pas responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'incapacité à utiliser ce site.</p>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Collecte de données</h3>
        <div class="text">
            <p>Ce site ne collecte aucune donnée personnelle de manière directe. Aucune information n'est stockée ou utilisée à des fins de marketing ou de suivi, saut si indication contraire de github.</p>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Politique de création de fans Supercell</h3>
        <div class="text">
            <p>Ce site contient des élément appartenant à Supercell Oy. Ce site est ni affilié, ni sponsorisé, ni approuvé par Supercell Oy.</p>
            <p>Veuillez vous tourner vers <a href="https://supercell.com/en/fan-content-policy/fr/" target="_blank">la page officielle de Supercell</a> pour plus d'informations.</p>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Cookies</h3>
        <div class="text">
            <p>Ce site n'utilise pas de cookies pour collecter des données personnelles. Cependant, des cookies tiers peuvent être utilisés pour des fonctionnalités spécifiques, comme l'intégration de vidéos YouTube. Ces cookies sont gérés par les plateformes tierces et sont soumis à leurs politiques de confidentialité respectives.</p>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Contact</h3>
        <div class="text">
            <p>Si vous avez des questions concernant ces mentions légales, veuillez me contacter sur Discord.</p>
        </div>
    </article>
    <article class="card" v-bind="cardAttrs" v-on="cardListeners">
      <h3>Modifications des mentions légales</h3>
        <div class="text">
            <p>Je me réserve le droit de modifier ces mentions légales à tout moment. Les modifications prendront effet dès leur publication sur ce site.</p>
        </div>
    </article>
</template>