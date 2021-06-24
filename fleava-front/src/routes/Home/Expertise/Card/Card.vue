<template>
    <div class="card-container">
        <g-image :src="`http://localhost:1337${data.cardImg}`" alt="card_img"/>
        <div class="desc">
            <h3>/ {{data.id >= 10 ? data.id : `0${data.id}`}}</h3>
            <div>
                <h2>{{data.title}}</h2>
                <p>{{data.desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    },
    mounted(){
        console.log(this.data)
    }
}
</script>
<style lang="scss" scoped src="./Card.style.scss">
</style>