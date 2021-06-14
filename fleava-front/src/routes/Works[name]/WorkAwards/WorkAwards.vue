<template>
    <div class="awards-container">
        <div class="desc">
            <h2>we transform brands, engage customers and grow businesses</h2>
            <p>Our amazing team creates brilliant experiences for our clients and their customers using strategy, research, design, technology, communications, data and creative thinking.</p>
        </div>
        <div class="awards">
            <div class="award" v-for="i in 2" :key="i">
                <img src="https://fleava.com/assets/img/general/cssda.webp" alt="">
                <div class="text">  
                    <strong>CSS Design Awards</strong>
                    <p>Website of the Day Innvation, UI, UX</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped src="./WorkAwards.style.scss">
</style>