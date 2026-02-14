<script setup>
</script>

<template>
    <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/linktree">Link tree</router-link>
    </nav>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-background);
  width: 100%;
}

nav {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 70px;
}
</style>