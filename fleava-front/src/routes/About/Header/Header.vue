<template>
  <div class="header-container">
      <div class="hello" ref="hello">
        <span>Hello.</span>
      </div>
      <div class="parallax" ref="prlx">
          <g-image src="~/images/banner.webp" alt="banner_image"/>
      </div>
      <div class="header" ref="header">
          <div class="reveal-item"><h3>/ about</h3></div>
          <div class="title">
            <div class="reveal-item">
                <h1>We are Fleava. We create </h1>
            </div>
            <div class="reveal-item">
                <h1>award-winning<br/>Products,</h1>
            </div>
            <div class="reveal-item">
                <h1>memorable Campaigns,</h1>
            </div>
            <div class="reveal-item">
                <h1>& remarkable Brands</h1>
            </div>
          </div>
          <div class="reveal-item"><p>Scroll down</p></div>
      </div>
  </div>
</template>
<script>
export default {
    data: () => ({
        observer: null,
    }),
    props:{
        headerData: Object,
    },
    mounted() {
        this.observer = new IntersectionObserver((entries)=> {
            entries.forEach(entry => {
                if(!entry.isIntersecting) return;
               this.$refs.hello.classList.add('hello-active');
               setTimeout(()=> this.$refs.header.classList.add('header-active'), 2000);
               setTimeout(()=> this.$refs.prlx.classList.add('parallax-active'), 2000);
               this.observer.unobserve(entry.target);
            })
        });
        this.observer.observe(this.$refs.header);
    },
}
</script>
<style lang="scss" scoped src="./Header.style.scss">
</style>