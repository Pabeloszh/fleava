<template>
    <div class="wparallax-container">
        <img src="https://fleava.com/assets/img/works/raia/full1.webp" alt="" ref="prlxImg">
    </div>
</template>
<script>
export default {
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