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
        <a :href="props.socialMediaLink" target="_blank" class="social">
            <div class="logo">
                <img v-if="props.socialMediaImage" :src="props.socialMediaImage"/>
            </div>
            <p> {{ props.text }} </p>
        </a>
    </div>
</template>

<style scoped>
.social {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}

.social a {
    background-color: var(--color-background-soft);
    display: flex;
    align-items: center;      
    justify-content: center;
    text-decoration: none;
    color: var(--vt-c-text-dark-2);
    height: 100%;
}

.social a:hover {
    background-color: var(--color-border-hover);
}

.logo {
    width: 300px;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    padding: 20px;
    box-sizing: border-box;
}


.logo img {
    max-width: 90%;
    max-height: 90%;
    display: block;
    object-fit: contain;
}

.social a p {
    font-size: 22px;      
    font-weight: 600;     
    margin: 0;            
    text-align: center;
}

</style>