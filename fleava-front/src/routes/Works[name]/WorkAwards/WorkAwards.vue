<template>
    <div class="awards-container">
        <div class="desc">
            <h2>we transform brands, engage customers and grow businesses</h2>
            <p>Our amazing team creates brilliant experiences for our clients and their customers using strategy, research, design, technology, communications, data and creative thinking.</p>
        </div>
        <div class="awards">
            <div class="award" v-for="award in data" :key="award.title">
                <img :src="`http://localhost:1337${award.image.url}`" alt="">
                <div class="text">  
                    <strong>{{award.title}}</strong>
                    <p>{{award.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data: Array,
    }
}
</script>
<style lang="scss" scoped src="./WorkAwards.style.scss">
</style>