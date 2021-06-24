<template>
  <Layout>
        <WorkHeader v-if="header" :data="header" />
        <ExpertiseDesc v-if="desc" :data="desc"/>
        <ExpertiseSlider v-if="slider" :data="slider"/>
        <Agency/>
        <Expertise/>
  </Layout>
</template>
<page-query>
    query{
        expertise: allPostedExpertise{
            edges{
                node{
                    id,
                    name,
                    title,
                    cardImg,
                    postTitle,
                    postDesc,
                    firstCardTitle,
                    firstCardDesc,
                    expertiseCards{
                        name,
                        title,
                        desc,
                        image{
                            formats{
                                large{
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</page-query>
<script>
import WorkHeader from "@/routes/Works[name]/WorkHeader/WorkHeader"
import ExpertiseDesc from "@/routes/Expertise[name]/ExpertiseDesc/ExpertiseDesc"
import ExpertiseSlider from "@/routes/Expertise[name]/ExpertiseSlider/ExpertiseSlider"
import Agency from "@/routes/Home/Agency/Agency"
import Expertise from "@/routes/Home/Expertise/Expertise"
export default {
    components:{
        WorkHeader,
        ExpertiseDesc,
        ExpertiseSlider,
        Agency,
        Expertise
    },
    data(){
        return{
            name: this.$route.params.name.replace(new RegExp("-", "g"), ' '),
            exp: {},
            header: null,
            desc: null,
            slider: null
        }
    },
    mounted(){
        this.exp = this.$page.expertise.edges.filter((edge)=>(edge.node.name === this.name))[0].node;
        this.header = {
            name: this.exp.name,
            title1: this.exp.title,
        }
        this.desc = {
            img: this.exp.cardImg,
            title: this.exp.postTitle,
            desc: this.exp.postDesc
        }
        this.slider = {
            title: this.exp.firstCardTitle,
            desc: this.exp.firstCardDesc,
            cards: this.exp.expertiseCards
        }
        // console.log(this.exp.expertiseCards)
    }
}
</script>
<style >
</style>