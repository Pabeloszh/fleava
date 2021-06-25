<template>
    <div class="blist-container">
        <div class="list">
            <div class="list-block">
                <div v-for="year in data" :key="year.id">
                    <span>{{year.year}}</span>
                    <a :href="desc.link" v-for="desc in year.brands_descs" :key="desc.id" :class="desc.link == '' && 'no-link'">{{desc.company}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data: Array,
    },
    mounted(){
        this.data = this.data.sort(function compareNumbers(a, b) {
            return a.year - b.year
        })
    }
}
</script>
<style lang="scss" scoped src="./BrandsList.style.scss">
</style>