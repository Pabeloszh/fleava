<template>
  <Layout>
    <Header :headerData="headerData"/>
    <CardsContainer :data="$page.works.edges" :route="`works`"/>
  </Layout>
</template>
<page-query>
  query {
    works: allPostedWorks{
      edges{
        node{
          id,
          name,
          title,
          tags,
          cardImg
        }
      }
    }
  }
</page-query>
<script>
import Header from "@/components/Header/Header"
import CardsContainer from "@/components/CardsContainer/CardsContainer"
export default {
  components: {
    Header,
    CardsContainer
  },
  data(){
    return{
      headerData: {
        title1: "We do amazing",
        title2: "things with amazing",
        title3: "People."
      }

    }
  },
}
</script>

<style>
</style>