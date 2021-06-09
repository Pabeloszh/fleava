<template>
  <Layout>
    <div class="content">
      <MainSlider/>
      <Expertise/>
    </div>
  </Layout>
</template>

<script>
import MainSlider from "./Home/MainSlider/MainSlider"
import Expertise from "./Home/Expertise/Expertise"
export default {
  components:{
    MainSlider,
    Expertise
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
