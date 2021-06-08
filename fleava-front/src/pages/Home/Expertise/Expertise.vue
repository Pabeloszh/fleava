<template>
    <div class="expertise-container">
        <div class="desc">
            <h3>/ Expertise</h3>
            <div>
                <h2>Elevating <span>Brands</span> through<br/>innovation in Digital<br/>Transformation.</h2>
                <p>What we do -></p>
            </div>
        </div>
        <div class="carousel-container" @touchstart="touchStart" @touchmove="touchMove" @touchend="()=>touched=false" @mousedown="carouselOnDragg" @mouseup="()=>pressed = false" @mousemove="carouselOnSlide">
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
    </div>
</template>
<script>
import Card from "./Card/Card"
export default {
    components:{
        Card
    },
    data(){
        return{
            pressed: false,
            touched: false,
            touch: 0,
            prevTouchX: 0,
            prevMoveX: 0,
            prevxUp: 0,
            x: 0,
            mobileX:0,
        }
    },
    methods:{
        carouselOnDragg(e) {
            this.pressed = true;
        },
        carouselOnSlide(e){
            if(!this.pressed) return
            if(this.x > 0){
                this.x = 0;
                document.querySelector('.carousel').style.transform = `translateX(0px)`;
                return

            }
            e.preventDefault();
            this.x += e.movementX;
            document.querySelector('.carousel').style.transform = `translateX(${this.x}px)`;
        },
        touchStart(e){
            this.touched = true;
            this.prevTouchX = e.targetTouches[0].clientX;
        },
        touchMove(e){
            if(!this.touched){
                return
            }

            let xUp = e.touches[0].clientX;
            this.prevxUp = e.touches[0].pageX;

            if(xUp >= this.prevMoveX) {
                console.log(Math.abs(this.prevTouchX - this.prevMoveX))
                this.prevMoveX !== 0 && (this.mobileX += Math.abs(this.prevTouchX - this.prevMoveX))
            }
            if(xUp <= this.prevMoveX) {
                console.log(Math.abs(this.prevTouchX - this.prevMoveX))
                this.prevMoveX !== 0 && (this.mobileX -= Math.abs(this.prevTouchX - this.prevMoveX))
            }
            document.querySelector('.carousel').style.transform = `translateX(${this.mobileX / 10}px)`;
            
            this.prevMoveX = xUp
        }
    }
}
</script>
<style lang="scss" scoped src="./Expertise.style.scss">
</style>