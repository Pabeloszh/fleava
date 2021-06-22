<template>
    <div class="jfstory-container">
        <div class="parallax" ref="prlx">
            <img src="https://fleava.com/assets/img/home/transform.webp" alt="">
        </div>
        <div class="desc">
            <h3>/ featured story</h3>
            <h1>Commarts: Behind our Digital Transformation campaign</h1>
        </div>
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
            this.$refs.prlx.style.top = `${-(this.$refs.prlx.getBoundingClientRect().y) * 0.35}px`;
        }
    }
}
</script>
<style lang="scss" scoped src="./JournalFeatStory.style.scss">
</style>