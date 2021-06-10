<template>
  <Layout>
    <div class="content">
      <MainSlider/>
      <Expertise/>
      <Agency/>
      <IndustryRec/>
      <AwardsVideo/>
    </div>
  </Layout>
</template>

<script>
import MainSlider from "./Home/MainSlider/MainSlider"
import Expertise from "./Home/Expertise/Expertise"
import Agency from "./Home/Agency/Agency"
import IndustryRec from "./Home/IndustryRec/IndustryRec"
import AwardsVideo from "./Home/AwardsVideo/AwardsVideo"
export default {
  components:{
    MainSlider,
    Expertise,
    Agency,
    IndustryRec,
    AwardsVideo
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
