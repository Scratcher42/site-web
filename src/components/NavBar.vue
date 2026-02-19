<script setup>
</script>

<template>
    <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/linktree">Link tree</router-link>
        <router-link to="/coupdecoeur">Coups de coeur</router-link>
        <router-link to="/changelogs">Changelogs</router-link>
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

  /* Positioning - will be overridden by media queries */
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  /* Visual */
  background: color-mix(in srgb, var(--color-background-mute) 60%, transparent 40%);
  border-radius: 13px;

  /* Effects */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

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

/* Desktop: fixed at top */
@media (min-width: 1024px) {
  nav {
    top: 12px;
    width: calc(100% - 2 * var(--app-padding));
    max-width: calc(100% - 24px);
  }
}

/* Mobile: fixed at bottom */
@media (max-width: 1023px) {
  nav {
    bottom: 12px;
    width: calc(100% - 24px);
    max-width: calc(100% - 24px);
  }
}
</style>