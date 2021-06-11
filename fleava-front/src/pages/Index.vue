<template>
  <Layout>
      <MainSlider/>
      <Expertise/>
      <Agency/>
      <IndustryRec/>
      <AwardsVideo/>
      <FeatStories/>
  </Layout>
</template>

<script>
import MainSlider from "@/routes/Home/MainSlider/MainSlider"
import Expertise from "@/routes/Home/Expertise/Expertise"
import Agency from "@/routes/Home/Agency/Agency"
import IndustryRec from "@/routes/Home/IndustryRec/IndustryRec"
import AwardsVideo from "@/routes/Home/AwardsVideo/AwardsVideo"
import FeatStories from "@/routes/Home/FeatStories/FeatStories"
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
