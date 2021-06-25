<template>
    <div class="clist-container" v-if="careers">
        <CareerCard v-for="(career, index) in careers" :key="career.node.id" :data="career.node" :num="index"/>
        <p>Apply now -></p>
    </div>
</template>
<static-query>
    query{
        careers: allPostedCareers{
            edges{
                node{
                    id,
                    position,
                    desc,
                    careers_skills{
                        ability
                    }
                }
            }
        }
    }
</static-query>
<script>
import CareerCard from "@/routes/Careers/CareersList/CareerCard/CareerCard"
export default {
    components:{
        CareerCard
    },
    data(){
        return{
            careers: null
        }
    },
    mounted(){
        this.careers = this.$static.careers.edges;
        console.log(this.careers);
    },
}
</script>
<style lang="scss" scoped src="./CareersList.style.scss">
</style>