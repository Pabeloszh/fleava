<template>
  <Layout>
      <WorkHeader :wHeaderData="wHeaderData"/>
        <div class="work-container">
            
        </div>
  </Layout>
</template>

<script>
import WorkHeader from "@/routes/Works[name]/WorkHeader/WorkHeader"
export default {
    components:{
        WorkHeader
    },
    data(){
        return{
            wHeaderData: {
                mainImg: 'https://fleava.com/assets/img/works/raia/banner.webp',
                dir: 'work',
                name: "club raia",
                title1: "Revolutionizing the",
                title2: "Nightlife Experience.",
            }
        }
    },
}
</script>

<style>

</style>