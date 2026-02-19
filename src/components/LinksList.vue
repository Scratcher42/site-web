<script setup>
import { getSocialMedias } from '@/services/socialMediasService';
import { ref, onMounted } from 'vue';
import LinkBox from './LinkBox.vue';

const linkList = ref([]);

onMounted(() => {
    linkList.value = getSocialMedias()
});
</script>

<template>
    <h2> Mes liens </h2>
    <div class="links-grid">
      <LinkBox v-for="link in linkList"
            :key="link.socialMediaLink"
            :socialMediaImage="link.socialMediaImage"
            :socialMediaLink="link.socialMediaLink"
            :color="link.color"
            :text="link.text"/>
        </div>
</template>

<style scoped>
.links-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 column by default (mobile-first) */
  gap: 2rem;
  width: 100%;
  align-items: start;
  justify-content: center;
  box-sizing: border-box;
  scrollbar-gutter: stable;
}

/* Small tablets/landscape phones → 2 columns */
@media (min-width: 600px) {
  .links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Medium screens → 3 columns */
@media (min-width: 900px) {
  .links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large screens/desktop → 4 columns */
@media (min-width: 1200px) {
  .links-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>