<template>
  <Layout>
        <WorkHeader v-if="header" :data="header" />
        <WorkParallax v-if="journal.image" :data="journal"/>
  </Layout>
</template>
<page-query>
    query{
        journals: allPostedJournal{
            edges{
                node{
                    id,
                    title,
                    desc,
                    blog,
                    name,
                    tag{
                        tagName
                    },
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
</page-query>
<script>
import WorkHeader from "@/routes/Works[name]/WorkHeader/WorkHeader"
import WorkParallax from "@/routes/Works[name]/WorkParallax/WorkParallax"
export default {
    components:{
        WorkHeader,
        WorkParallax
    },
    data(){
        return{
            name: this.$route.params.name.replace(new RegExp("-", "g"), ' '),
            journal: {},
            header: null,
        }
    },
    mounted(){
        this.journal = this.$page.journals.edges.filter((edge)=>(edge.node.name === this.name))[0].node;
        console.log(this.journal)
        this.header = {
            name: this.journal.tag.tagName,
            title1: this.journal.title,
        }
    }
}
</script>
<style>
</style>