<template>
    <Layout>
        <Header :headerData="headerData"/>
        <JournalFeatStory/>
    </Layout>
</template>
<script>
import Header from "@/components/Header/Header";
import JournalFeatStory from "@/routes/Journal/JournalFeatStory/JournalFeatStory"
export default {
  components: {
    Header,
    JournalFeatStory
  },
  data(){
    return{
      headerData: {
        name: "journal",
        title1: "Perspectives on the",
        title2: "Digital World -",
      }

    }
  },
}
</script>
<style>

</style>