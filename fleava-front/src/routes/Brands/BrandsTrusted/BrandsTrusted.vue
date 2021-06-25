<template>
    <div class="trusted-container">
        <h3>/ trusted by</h3>
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
<style lang="scss" scoped src="./BrandsTrusted.style.scss">
</style>