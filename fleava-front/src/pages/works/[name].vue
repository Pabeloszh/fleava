<template>
  <Layout>
        <WorkHeader v-if="header" :data="header" />
        <WorkDesc v-if="work.desc" :data="work.desc"/>
        <WorkParallax v-if="work.parallax" :data="work.parallax"/>
        <WorkWebsite v-for="web in work.website" :key="web.title" :data="web" :style="{backgroundColor: `#${work.hexColor}`}"/>
        <WorkMobile v-if="work.mobile" :data="work.mobile" :style="{backgroundColor: `#${work.hexColor}`}"/>
        <WorkAwards :data="work.awards" :style="{backgroundColor: `#${work.hexColor}`}"/>
  </Layout>
</template>
<page-query>
query{
  works: allPostedWorks{
    edges{
      node{
        id,
        name,
        title,
        tags,
        mainImg,
        hexColor,
        desc: workDescription{
          desc,
          url
        }
        parallax: workParallax{
          image{
            formats{
              large{
                url
              }
            }
          }
        }
        website: workWebsite{
            name,
            title,
            desc,
            images{
                url
            }
        }
        mobile: workMobile{
            name,
            desc,
            images{
                url
            }
        }
        awards: workAwards{
            image{
                url
            },
            title,
            desc
        }
      }
    }
  }
},
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
            name: this.$route.params.name.replace("-", ' '),
            work: {},
            header: null,
        }
    },
    mounted(){
        this.work = this.$page.works.edges.filter((edge)=>(edge.node.name === this.name))[0].node;
        console.log(this.work)
        this.header = {
            name: this.work.name,
            mainImg: this.work.mainImg,
            title1: this.work.title,
        }
    }
}
</script>
<style >
</style>