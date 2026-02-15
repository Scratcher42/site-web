<script setup>
</script>

<template>
    <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/linktree">Link tree</router-link>
    </nav>
</template>

<style scoped>
nav {
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  height: 70px;
  width: 100%;

  /* Positioning */
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;

  /* Visual */
  background: color-mix(in srgb, var(--color-background-mute) 60%, transparent 40%);
  border-radius: 0;

  /* Effects */
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
}
/* Link styles */
/* Link styles */
nav a {
  background: transparent;
  color: var(--color-text);
  text-decoration: none;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: 100%;
  transition: color .18s ease, opacity .18s ease;
  opacity: 0.95;
  font-size: clamp(16px, 2.5vw, 20px);
  cursor: pointer;
}

nav a.router-link-active :hover {
  color: #ffffff;
  font-weight: 600;
  opacity: 1;
}

/* Active/current route: white */
nav a.router-link-active,
nav a.router-link-exact-active {
  color: #ffffff;
  font-weight: 600;
  opacity: 1;
}

/* Hover/focus should match active appearance */
nav a:hover,
nav a:focus {
  color: #ffffff;
  font-weight: 600;
  opacity: 1;
  outline: none;
}

/* Desktop: sticky at top, full width */
@media (min-width: 1024px) {
  nav {
    position: sticky;
    top: 0;
    bottom: auto;
    border-radius: 16px;
  }
}
</style>