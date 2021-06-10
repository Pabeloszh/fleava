<template>
  <div class="stories-container">
      <h3>/ featured stories</h3>
      <Story/>
      <Story/>
      <Story/>
      <p>Explore the Journal -></p>
  </div>
</template>

<script>
import Story from "@/components/Story/Story"
export default {
    components:{
        Story
    }
}
</script>

<style lang="scss" scoped src="./FeatStories.style.scss">
</style>