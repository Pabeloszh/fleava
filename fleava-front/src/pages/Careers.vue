<template>
  <Layout>
      <Header :headerData="headerData"/>
      <ExpertiseDesc :data="desc"/>
      <CareersList/>
  </Layout>
</template>

<script>
import Header from "@/components/Header/Header"
import ExpertiseDesc from "@/routes/Expertise[name]/ExpertiseDesc/ExpertiseDesc"
import CareersList from "@/routes/Careers/CareersList/CareersList"
export default {
    components:{
        Header,
        ExpertiseDesc,
        CareersList
    },
    data(){
        return{
            headerData: {
                name: "careers",
                title1: "Join our award-winning",
                title2: "team at Fleava.",
            },
            desc: {
                img: '/uploads/careers_35e6f6a48c.webp',
                title: 'We’re always looking for talented people that move us bolder, dream bigger and perform better.',
                desc: "At Fleava you will get to work with some of the world's leading brands, on innovative creative and technology initiatives - in an environment that champions creativity and personal development."
            }
        }
    }
}
</script>

<style>

</style>