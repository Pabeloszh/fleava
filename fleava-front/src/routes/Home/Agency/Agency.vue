<template>
    <div class="agency-container">
        <div class="parallax">
            <g-image src="~/images/about.webp" alt="" ref="prlx"/>
        </div>
        <div class="desc">
            <h3>/ the agency</h3>
            <h1>We do amazing<br/>things with amazing<br/>People.</h1>
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
<style lang="scss" scoped src="./Agency.style.scss">
</style>