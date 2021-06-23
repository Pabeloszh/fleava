<template>
    <Layout>
        <Header :headerData="headerData"/>
        <JournalFeatStory/>
        <JournalCardsContainer :data="$page.journal.edges"/>
    </Layout>
</template>
<page-query>
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
</page-query>
<script>
import Header from "@/components/Header/Header";
import JournalFeatStory from "@/routes/Journal/JournalFeatStory/JournalFeatStory"
import JournalCardsContainer from "@/routes/Journal/JournalCardsContainer/JournalCardsContainer"
export default {
  components: {
    Header,
    JournalFeatStory,
    JournalCardsContainer
  },
  data(){
    return{
      headerData: {
        name: "journal",
        title1: "Perspectives on the",
        title2: "Digital World -",
      }

    }
  },
}
</script>
<style>

</style>