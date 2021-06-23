<template>
    <div class="jblog-container">
        <div v-html="data">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:String
    },
    mounted(){
        console.log(this.data)
    }
    
}
</script>
<style lang="scss" src="./JournalBlog.style.scss">
</style>