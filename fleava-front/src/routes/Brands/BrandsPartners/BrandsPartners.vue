<template>
    <div class="partners-container">
        <h3>/ IN PARTNERSHIP WITH</h3>
        <div class="logos" v-if="data">
            <img :src="`http://localhost:1337${trusted.formats.thumbnail.url}`" alt="" v-for="trusted in data" :key="trusted.id">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data: Array
    },
}
</script>
<style lang="scss" scoped src="./BrandsPartners.style.scss">
</style>