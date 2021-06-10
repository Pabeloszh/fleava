<template>
  <Layout>
    <div class="content">
      <MainSlider/>
      <Expertise/>
      <Agency/>
      <div :style="{backgroundColor: 'red', height: '1000px', width: '100%'}">
        idk
      </div>
    </div>
  </Layout>
</template>

<script>
import MainSlider from "./Home/MainSlider/MainSlider"
import Expertise from "./Home/Expertise/Expertise"
import Agency from "./Home/Agency/Agency"
export default {
  components:{
    MainSlider,
    Expertise,
    Agency
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
