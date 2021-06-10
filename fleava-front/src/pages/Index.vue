<template>
  <Layout>
    <div class="content">
      <MainSlider/>
      <Expertise/>
      <Agency/>
      <IndustryRec/>
    </div>
  </Layout>
</template>

<script>
import MainSlider from "./Home/MainSlider/MainSlider"
import Expertise from "./Home/Expertise/Expertise"
import Agency from "./Home/Agency/Agency"
import IndustryRec from "./Home/IndustryRec/IndustryRec"
export default {
  components:{
    MainSlider,
    Expertise,
    Agency,
    IndustryRec
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
