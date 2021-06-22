<template>
    <div class="jcards-container">
        <Story v-for="jour in data" :key="jour.id" :data="jour.node"/>
    </div>
</template>
<script>
import Story from "@/components/Story/Story"
export default {
    components:{
        Story
    },
    props:{
        data: Array
    },
}
</script>
<style lang="scss" scoped src="./JournalCardsContainer.style.scss">
</style>