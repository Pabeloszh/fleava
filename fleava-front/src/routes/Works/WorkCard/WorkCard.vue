<template>
  <div class="wcard-container" ref="wcrdCont">
      <div class="parallax">
          <img src="https://fleava.com/assets/img/works/thumbs/raia.webp" alt="" ref="prlxImg">
      </div>
      <div class="info">
          <div class="wcaption">
              <h3>Club raia</h3>
              <hr>
          </div>
          <h2>Revolutionizing the Nightlife Experience.</h2>
          <div class="desc">
              <p>Strategy.</p>
              <p>UX/UI Design.</p>
              <p>Website.</p>
              <p>Copywriting.</p>
              <p>Media Production.</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        num: Number,
    },
    created () {
        
        window.innerWidth > 992 && window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
           this.num%2 === 0 && (this.$refs.wcrdCont.style.transform = `translateY(${-(this.$refs.wcrdCont.getBoundingClientRect().y) * 0.1}px)`);
           this.num%2 !== 0 && (this.$refs.wcrdCont.style.transform = `translateY(${(this.$refs.wcrdCont.getBoundingClientRect().y) * 0.1}px)`);
           this.$refs.prlxImg.style.transform = `translateY(${-(this.$refs.prlxImg.getBoundingClientRect().y) * 0.35}px)`;
        }
    }
}
</script>
<style lang="scss" scoped src="./WorkCard.style.scss">

</style>