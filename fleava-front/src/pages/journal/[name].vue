<template>
  <Layout>
        <WorkHeader v-if="header" :data="header" />
        <WorkParallax v-if="journal.image" :data="journal"/>
        <JournalBlog v-if="journal.blog" :data="journal.blog"/>
        <JournalPrevNext v-if="prevNext.prev && prevNext.next" :data="prevNext"/>
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
import JournalPrevNext from "@/routes/Journal[name]/JournalPrevNext/JournalPrevNext"
import JournalBlog from "@/routes/Journal[name]/JournalBlog/JournalBlog"
export default {
    components:{
        WorkHeader,
        WorkParallax,
        JournalBlog,
        JournalPrevNext
    },
    data(){
        return{
            name: this.$route.params.name.replace(new RegExp("-", "g"), ' '),
            journal: {},
            header: null,
            prevNext:{}
        }
    },
    mounted(){
        this.journal = this.$page.journals.edges.filter((edge)=>(edge.node.name === this.name))[0].node;

        let numOfCurr = this.$page.journals.edges.indexOf(this.$page.journals.edges.filter((edge)=>(edge.node.name === this.name))[0])
        this.prevNext = {
            prev: (numOfCurr - 1) < 0 ? this.$page.journals.edges[this.$page.journals.edges.length - 1] : this.$page.journals.edges[numOfCurr - 1],
            next: (numOfCurr + 1) >= this.$page.journals.edges.length ? this.$page.journals.edges[0] : this.$page.journals.edges[numOfCurr + 1],
        }
        console.log(this.prevNext)

        this.header = {
            name: this.journal.tag.tagName,
            title1: this.journal.title,
        }
    }
}
</script>
<style>
</style>