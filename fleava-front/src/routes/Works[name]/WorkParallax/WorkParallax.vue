<template>
    <div class="wparallax-container">
        <img :src="`http://localhost:1337${data.image.formats.large.url}`" alt="" ref="prlxImg">
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            this.$refs.prlxImg.style.transform = `translateY(${-(this.$refs.prlxImg.getBoundingClientRect().y) * .8}px)`;
        }
    },
}
</script>
<style lang="scss" scoped src="./WorkParallax.style.scss">
</style>