<template>
    <div class="exdesc-container">
        <div class="photo">
            <div></div>
            <div></div>
            <div class="parallax">
                <img :src="`http://localhost:1337${data.img}`" alt="">
            </div>
        </div>
        <div class="desc">
            <div v-if="data.title && data.desc">
                <h1>{{data.title}}</h1>
                <p>{{data.desc}}</p>
                <p href="">Get in touch -></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data: Object,
    },
    mounted(){
        console.log(this.data)
    }
}
</script>
<style lang="scss" scoped src="./ExpertiseDesc.style.scss">
</style>