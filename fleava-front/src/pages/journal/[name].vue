<template>
  <Layout>
      idsk
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
                    mainImg{
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
export default {
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
            name: this.journal.name,
            mainImg: this.journal.mainImg,
            title1: this.journal.title,
        }
    }
}
</script>

<style>

</style>