<template>
    <div class="jprevnext-container">
        <Story :data="data.prev.node"/>
        <Story :data="data.next.node"/>
      <p>Explore the Journal -></p>
    </div>
</template>

<script>
import Story from "@/components/Story/Story"
export default {
    components:{
        Story
    },
    props:{
        data: Object
    },
    mounted(){
        console.log(this.data)
    }
}
</script>
<style lang="scss" scoped src="./JournalPrevNext.style.scss">
</style>