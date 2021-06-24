<template>
    <div class="alist-container" v-if="awards">
        <div class="list-block" v-for="month in awards" :key="month.node.month">
            <span>{{month.node.month}}</span>
            <div class="list">
                <div class="list-item" v-for="award in month.node.awards_descs" :key="award.id">
                    <p>{{award.company}}</p>
                    <p>{{award.title}}</p>
                    <p>{{award.from}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<static-query>
    query{
        awards: allPostedAwards{
            edges{
                node{
                    id,
                    month,
                    awards_descs{
                        id,
                        company,
                        title,
                        from,
                    }
                }
            }
        }
    }
</static-query>
<script>
export default {
    data(){
        return{
            awards: null,
        }
    },
    mounted(){
        this.awards = this.$static.awards.edges;
        console.log(this.awards)
    }
}
</script>
<style lang="scss" scoped src="./AwardsList.style.scss">
</style>