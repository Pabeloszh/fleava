<template>
  <Layout>
    <div class="content">
      <MainSlider/>
      <Expertise/>
      <Agency/>
      <IndustryRec/>
      <AwardsVideo/>
      <FeatStories/>
    </div>
  </Layout>
</template>

<script>
import MainSlider from "./Home/MainSlider/MainSlider"
import Expertise from "./Home/Expertise/Expertise"
import Agency from "./Home/Agency/Agency"
import IndustryRec from "./Home/IndustryRec/IndustryRec"
import AwardsVideo from "./Home/AwardsVideo/AwardsVideo"
import FeatStories from "./Home/FeatStories/FeatStories"
export default {
  components:{
    MainSlider,
    Expertise,
    Agency,
    IndustryRec,
    AwardsVideo,
    FeatStories
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
