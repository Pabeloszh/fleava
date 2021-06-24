<template>
  <div class="excard-container">
    <div class="image">
      <img :src="`http://localhost:1337${data.image.formats.large.url}`" alt="">
    </div>
    <div class="desc">
      <h3>{{data.name}}</h3>
      <h2>{{data.title}}</h2>
      <p>{{data.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data: Object,
  },
}
</script>
<style lang="scss" scoped src="./ExpertiseCard.style.scss">
</style>