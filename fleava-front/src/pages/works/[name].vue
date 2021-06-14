<template>
  <Layout>
        <WorkHeader :wHeaderData="wHeaderData"/>
        <WorkDesc/>
        <WorkParallax/>
        <WorkWebsite/>
        <WorkMobile/>
  </Layout>
</template>

<script>
import WorkHeader from "@/routes/Works[name]/WorkHeader/WorkHeader"
import WorkDesc from "@/routes/Works[name]/WorkDesc/WorkDesc"
import WorkParallax from "@/routes/Works[name]/WorkParallax/WorkParallax"
import WorkWebsite from "@/routes/Works[name]/WorkWebsite/WorkWebsite"
import WorkMobile from "@/routes/Works[name]/WorkMobile/WorkMobile"
export default {
    components:{
        WorkHeader,
        WorkDesc,
        WorkParallax,
        WorkWebsite,
        WorkMobile
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