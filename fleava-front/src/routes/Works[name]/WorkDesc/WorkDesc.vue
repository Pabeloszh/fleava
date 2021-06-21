<template>
    <div class="wdesc-container">
        <div class="content">
            <div>
                <div>
                    <p v-for="tag in tags" :key="tag.name">{{tag.tagName}}</p>
                </div>
                <div>
                    <h4>
                        {{data.desc}}
                    </h4>
                </div>
            </div>
            <p>Visit Website -></p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data: Object,
        tags: Array,
    }
}
</script>
<style lang="scss" scoped src="./WorkDesc.style.scss">

</style>