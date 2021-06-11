<template>
  <Layout>
    <Header :headerData="headerData"/>
    <WCardsCont/>
  </Layout>
</template>
<script>
import Header from "@/components/Header/Header"
import WCardsCont from "@/routes/Works/WCardsCont/WCardsCont"
export default {
  components: {
    Header,
    WCardsCont
  },
  data(){
    return{
      headerData: {
        title1: "We do amazing",
        title2: "things with amazing",
        title3: "People."
      }

    }
  }
}
</script>

<style>
</style>