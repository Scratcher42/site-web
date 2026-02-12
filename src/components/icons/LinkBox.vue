<script setup>
const props = defineProps({
    socialMediaImage:{
        type: String,
        required: false
    },
    socialMediaLink: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="social">
        <a :href="props.socialMediaLink" target="_blank">
            <img v-if="props.socialMediaImage" :src="props.socialMediaImage"/>
            <p> {{ props.text }} </p>
        </a>
    </div>
</template>

<style scoped>
.social {
    background-color: white;
    border: 2px solid black;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.social a {
    display: flex;
    align-items: center;      /* centre verticalement */
    justify-content: center;  /* centre horizontalement */
    gap: 10px;                /* espace image / texte */
    width: 100%;
    height: 100%;
    text-decoration: none;
}

.social a p {
    font-size: 22px;      /* texte plus grand */
    font-weight: 600;     /* un peu plus lisible */
    margin: 0;            /* enlève l’espace par défaut du <p> */
    text-align: center;
}

</style>