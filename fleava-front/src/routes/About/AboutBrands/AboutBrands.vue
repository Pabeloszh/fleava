<template>
  <div class="abrands-container">
      <div class="overlay"></div>
      <div ref="title">
            <h3>/ brands</h3>
            <h1>We help businesses<br/>all around the world<br/>to grow</h1>
            <p>Explore all Brands -></p>
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
            this.$refs.title.style.top = `${-(this.$refs.title.getBoundingClientRect().y) * 0.95 + 300}px`;
        }
    }
}
</script>
<style lang="scss" scoped src="./AboutBrands.style.scss">
</style>