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
    <div class="main">
        <div class="links-grid">
            <LinkBox v-for="link in linkList"
                    :key="link.socialMediaLink"
                    :socialMediaImage="link.socialMediaImage"
                    :socialMediaLink="link.socialMediaLink"
                    :color="link.color"
                    :text="link.text"/>
        </div>
    </div>
</template>

<style scoped>
.main {
    height: 100%;
}

.links-grid {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    gap: 20px;
    padding: 20px;
    justify-content: center;
    box-sizing: border-box;
    scrollbar-gutter: stable;
}
</style>