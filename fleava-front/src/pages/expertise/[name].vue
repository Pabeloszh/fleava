<template>
  <Layout>
        <WorkHeader v-if="header" :data="header" />
        <ExpertiseDesc v-if="desc" :data="desc"/>
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
                    }
                }
            }
        }
    }
</page-query>
<script>
import WorkHeader from "@/routes/Works[name]/WorkHeader/WorkHeader"
import ExpertiseDesc from "@/routes/Expertise[name]/ExpertiseDesc/ExpertiseDesc"
import Agency from "@/routes/Home/Agency/Agency"
import Expertise from "@/routes/Home/Expertise/Expertise"
export default {
    components:{
        WorkHeader,
        ExpertiseDesc,
        Agency,
        Expertise
    },
    data(){
        return{
            name: this.$route.params.name.replace(new RegExp("-", "g"), ' '),
            exp: {},
            header: null,
            desc: null
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
        console.log(this.desc)
    }
}
</script>
<style >
</style>