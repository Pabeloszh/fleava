<template>
    <div class='main-s-container'>
        <div class="slider-container">
            <div class="slider">
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
            </div>
        </div>
        <div class="slider-nav">
            <h3 class="prev" @mousemove="circlePrevActive" @mouseleave="circleInactive('prev')">Prev</h3>
            <span class="circle-prev"></span>
            <hr>
            <h3 class="next" @mousemove="circleNextActive" @mouseleave="circleInactive('next')" @click="nextSlide">Next</h3>
            <span class="circle-next"></span>
        </div>
    </div>
</template>
<script>
import Slide from "./Slide/Slide.vue"
export default {
    components:{
        Slide
    },
    data(){
        return{
            circleX: 0,
            circleY: 0,
            currSlide: 1,
        }
    },
    methods:{
        circleActive(e, circle) {
            this.circleX = e.layerX;
            this.circleY = e.layerY;
            document.querySelector(`.circle-${circle}`).classList.add('circle-active');
            circle === 'prev' ? document.querySelector(`.circle-${circle}`).style.left = `${this.circleX}px` : document.querySelector(`.circle-${circle}`).style.right = `-${this.circleX}px`;
            document.querySelector(`.circle-${circle}`).style.top = `${this.circleY}px`;
        },
        circlePrevActive(e){
            this.circleActive(e, 'prev');
        },
        circleNextActive(e){
            this.circleActive(e, 'next');
        },
        circleInactive(circle){
            document.querySelector(`.circle-${circle}`).classList.remove('circle-active');
        },
        nextSlide(){
            document.querySelector('.slider').style.transform = `translateX(-${document.querySelector('.slider').clientWidth * this.currSlide}px)`;
            this.currSlide++
        }
    }
}
</script>
<style lang="scss" scoped src="./MainSlider.style.scss">
</style>