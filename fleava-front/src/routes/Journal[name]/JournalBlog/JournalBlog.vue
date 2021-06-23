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
    }
    
}
</script>
<style lang="scss" scoped src="./JournalBlog.style.scss">
</style>