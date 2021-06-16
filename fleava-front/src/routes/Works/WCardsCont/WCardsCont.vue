<template>
    <div class="wcards-container">
        <div>
            <WorkCard v-for="edge in $static.works.edges" :key="edge.node.id" :link="edge.node.name" :data="edge.node"/>
        </div>
    </div>
</template>
<static-query>
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
</static-query>
<script>
import WorkCard from "@/routes/Works/WorkCard/WorkCard"
export default {
    components:{
        WorkCard
    },
}
</script>
<style lang="scss" scoped src="./WCardCont.style.scss">
</style>