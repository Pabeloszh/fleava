<template>
    <div class="cards-container">
        <div>
            <Card v-for="edge in data" :key="edge.node.id" :link="edge.node.name" :data="edge.node" :route="route"/>
        </div>
    </div>
</template>
<script>
import Card from "@/components/Card/Card"
export default {
    components:{
        Card
    },
    props:{
        data: Array,
        route: String,
    },
    mounted(){
        console.log(this.data)
    }
}
</script>
<style lang="scss" scoped src="./CardsContainer.style.scss">
</style>