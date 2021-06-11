<template>
    <div class="wcards-container">
        <div>
            <WorkCard v-for="card in cards" :key="card" :num="card"/>
        </div>
    </div>
</template>

<script>
import WorkCard from "@/routes/Works/WorkCard/WorkCard"
export default {
    components:{
        WorkCard
    },
    data(){
        return{
            cards: [1,2,3,4,5,6]

        }
    }
}
</script>
<style lang="scss" scoped src="./WCardCont.style.scss">
</style>