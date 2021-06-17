<template>
  <div class="website-container">
      <div class="desc">
          <h3>/ {{data.name}}</h3>
          <h2>{{data.title}}</h2>
          <p>{{data.desc}}</p>
      </div>
      <div class="imgs">
          <img v-for="img in data.images" :key="img.url" :src="`http://localhost:1337${img.url}`" alt="">
      </div>
  </div>
</template>
<script>
export default {
    props:{
        data: Object,
    }
}
</script>
<style lang="scss" scoped src="./WorkWebsite.style.scss">
</style>