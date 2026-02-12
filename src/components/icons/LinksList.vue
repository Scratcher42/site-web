<script setup>
import { getSocialMedias } from '../../services/socialMediasService';
import { ref, onMounted } from 'vue';
import LinkBox from './LinkBox.vue';

const linkList = ref([]);

onMounted(() => {
    linkList.value = getSocialMedias()
});
console.log(linkList.value);
</script>

<template>
    <LinkBox v-for="link in linkList"
            :key="link.socialMediaLink"
            :socialMediaImage="link.socialMediaImage"
            :socialMediaLink="link.socialMediaLink"
            :text="link.text"/>
</template>