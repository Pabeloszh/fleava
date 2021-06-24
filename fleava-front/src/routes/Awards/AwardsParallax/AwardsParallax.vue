<template>
  <div class="aparallax-container">
      <div class="parallax">
          <g-image src="@/images/poster.webp" alt="poster" ref="prlx"/>
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
            this.$refs.prlx.style.transform = `translateY(${-(this.$refs.prlx.getBoundingClientRect().y) * 0.35}px)`;
        }
    }
}
</script>
<style lang="scss" scoped src="./AwardsParallax.style.scss">
</style>