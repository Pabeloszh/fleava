<template>
    <div class="expertise-container">
        <div class="desc">
            <h3>/ Expertise</h3>
            <div>
                <h2>Elevating <span>Brands</span> through<br/>innovation in Digital<br/>Transformation.</h2>
                <p>What we do -></p>
            </div>
        </div>
        <div class="carousel">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
</template>
<script>
import Card from "./Card/Card"
export default {
    components:{
        Card
    }
}
</script>
<style lang="scss" scoped src="./Expertise.style.scss">
</style>