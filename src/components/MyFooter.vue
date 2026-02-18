<script setup>
import { router } from '../route';

</script>

<template>
    <footer>
        <p>Site personnel de Scratche42, vidéaste gaming et passionné d'informatique.</p>
        <router-link :to="{ name: 'legal' }">Mentions légales</router-link> |
        <a href="https://github.com/Scratcher42/site-web" target="_blank">Code source</a>
    </footer>
</template>

<style scoped>
footer {
  text-align: center;
  padding: 1rem;
  background: color-mix(in srgb, var(--color-background-mute) 60%, transparent 40%);
  border-radius: 13px;
  color: var(--color-text);
  font-size: 14px;
}
</style>