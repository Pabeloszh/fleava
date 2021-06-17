<template>
  <Layout>
        <WorkHeader :wHeaderData="wHeaderData"/>
        <WorkDesc v-if="wComponents.desc" :data="this.work.workZone.filter(w=>w.componentName === 'description')[0]"/>
        <WorkParallax v-if="wComponents.para" :data="this.work.workZone.filter(w=>w.componentName === 'parallax')[0].image.url"/>
        <WorkWebsite v-if="wComponents.web" :data="this.work.workZone.filter(w=>w.componentName === 'website')[0]"/>
        <WorkMobile v-if="wComponents.mob" :data="this.work.workZone.filter(w=>w.componentName === 'mobile')[0]"/>
        <WorkAwards/>
  </Layout>
</template>
<page-query>
    query{
        works: allPostedWorks{
            edges{
                node{
                    name,
                    title,
                    tags,
                    mainImg
                    workZone{
                        componentName,
                        title,
                        desc,
                        image{
                            url
                        }
                        images{
                            url
                        }
                    }
                }
            }
        }
    }
</page-query>
<script>
import WorkHeader from "@/routes/Works[name]/WorkHeader/WorkHeader"
import WorkDesc from "@/routes/Works[name]/WorkDesc/WorkDesc"
import WorkParallax from "@/routes/Works[name]/WorkParallax/WorkParallax"
import WorkWebsite from "@/routes/Works[name]/WorkWebsite/WorkWebsite"
import WorkMobile from "@/routes/Works[name]/WorkMobile/WorkMobile"
import WorkAwards from "@/routes/Works[name]/WorkAwards/WorkAwards"
export default {
    components:{
        WorkHeader,
        WorkDesc,
        WorkParallax,
        WorkWebsite,
        WorkMobile,
        WorkAwards
    },
    data(){
        return{
            wHeaderData: {
                mainImg: 'https://fleava.com/assets/img/works/raia/banner.webp',
                dir: 'work',
                name: "club raia",
                title1: "Revolutionizing the",
                title2: "Nightlife Experience.",
            },
            wComponents: {
                desc: false,
                para: false,
                web: false,
                mob: false,
            },
            work: {},
        }
    },
    mounted(){
        this.name = this.$route.params.name.replace("-", ' ');
        this.work = this.$page.works.edges.filter((edge)=>(edge.node.name === this.name))[0].node

        this.wComponents = {
            desc: this.work.workZone.filter(w=>w.componentName === 'description').length > 0,
            para: this.work.workZone.filter(w=>w.componentName === 'parallax').length > 0,
            web: this.work.workZone.filter(w=>w.componentName === 'website').length > 0,
            mob: this.work.workZone.filter(w=>w.componentName === 'mobile').length > 0
        }
        console.log(this.work.workZone.filter(w=>w.componentName === 'website')[0])

        this.wHeaderData = {
            mainImg: `http://localhost:1337${this.work.mainImg}`,
            dir: 'work',
            name: this.work.name,
            title1: "Revolutionizing the",
            title2: "Nightlife Experience.",
        }
    }
}
</script>

<style>

</style>