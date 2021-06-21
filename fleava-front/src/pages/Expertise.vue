<template>
  <Layout>
    <Header :headerData="headerData"/>
    <CardsContainer :data="$page.exp.edges" :route="`expertise`"/>
  </Layout>
</template>
<page-query>
    query{
        exp: allPostedExpertise{
            edges{
                node{
                    id,
                    name,
                    title,
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
    components:{
        Header,
        CardsContainer
    },
    data(){
        return{
            headerData: {
                name: "expertise",
                title1: "Elevating Brands through",
                title2: "innovation in Digital",
                title3: "Transformation."
            }
        }
    },
}
</script>
<style>
</style>