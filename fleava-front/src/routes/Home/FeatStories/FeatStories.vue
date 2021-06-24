<template>
  <div class="stories-container" v-if="journal">
      <h3>/ featured stories</h3>
      <Story v-for="jour in journal" :key="jour.id" :data="jour.node"/>
      <p>Explore the Journal -></p>
  </div>
</template>
<static-query>
    query{
        journal: allPostedJournal{
            edges{
                node{
                    id,
                    title,
                    desc,
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
</static-query>
<script>
import Story from "@/components/Story/Story"
export default {
    components:{
        Story
    },
    data(){
        return{
            journal: null
        }
    },
    mounted(){
        this.journal=this.$static.journal.edges
    }
}
</script>

<style lang="scss" scoped src="./FeatStories.style.scss">
</style>