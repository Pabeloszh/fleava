<template>
  <div class="card-container" ref="crdCont" @click="$router.push(`/${route}/`+data.name.replace(/\s+/g, '-').toLowerCase())">
      <div class="parallax">
          <img :src="`http://localhost:1337${data.cardImg}`" alt="" ref="prlxImg">
      </div>
      <div class="info">
          <div class="caption">
              <h3>{{data.name}}</h3>
              <hr>
          </div>
          <h2>{{data.title}}</h2>
          <div class="desc">
              <p v-for="tag in data.tags" :key="tag.name">{{tag.tagName}}.</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        route: String,
        link: String,
        data: Object,
    },
    created () {
        window.innerWidth > 992 && window.addEventListener('scroll', this.handleScroll);
    },
    mounted(){
        console.log(this.data.workTags)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
           this.data.id%2 === 0 && (this.$refs.crdCont.style.transform = `translateY(${-(this.$refs.crdCont.getBoundingClientRect().y) * 0.1}px)`);
           this.data.id%2 !== 0 && (this.$refs.crdCont.style.transform = `translateY(${(this.$refs.crdCont.getBoundingClientRect().y) * 0.1}px)`);
           this.$refs.prlxImg.style.transform = `translateY(${-(this.$refs.prlxImg.getBoundingClientRect().y) * 0.35}px)`;
        }
    }
}
</script>
<style lang="scss" scoped src="./Card.style.scss">
</style>