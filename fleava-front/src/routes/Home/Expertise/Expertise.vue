<template>
    <div class="expertise-container">
        <div class="desc">
            <h3>/ Expertise</h3>
            <div>
                <h2>Elevating <span>Brands</span> through<br/>innovation in Digital<br/>Transformation.</h2>
                <p>What we do -></p>
            </div>
        </div>
        <div class="carousel-container" @touchstart="touchStart" @touchmove="touchMove" @touchend="()=>touched=false" @touchcancel="()=>touched=false" @mousedown="carouselOnDragg" @mouseup="()=>pressed = false" @mousemove="carouselOnSlide">
            <div class="carousel" v-if="expertise" @mousemove="dragCircle" @mouseleave="() => circle.active = false"> 
                <Card v-for="exper in expertise" :key="exper.node.id" :data="exper.node"/>
                <CursorCircle :circle="circle"/>
            </div>
        </div>
    </div>
</template>
<static-query>
    query{
        exp: allPostedExpertise{
            edges{
                node{
                    id,
                    name,
                    title,
                    cardImg
                    expertiseCards{
                        name
                    }
                }
            }
        }
    }
</static-query>
<script>
import Card from "./Card/Card"
import CursorCircle from "@/components/CursorCircle/CursorCircle"
export default {
    components:{
        Card,
        CursorCircle
    },
    data(){
        return{
            expertise: null,
            pressed: false,
            touched: false,
            prevTouchX: 0,
            scrollLeft: 0,
            circle: {
                active: false,
                title: 'Drag',
                bgColor:'transparent',
                color:"#fff",
                border: "1px solid #fff",
                x: 0,
                y: 0,
            },

        }
    },
    mounted(){
        this.expertise = this.$static.exp.edges
    },
    methods:{
        carouselOnDragg(e) {
            this.pressed = true;
            this.scrollLeft = document.querySelector('.carousel').scrollLeft;

        },
        carouselOnSlide(e){
            if(!this.pressed) return
            e.preventDefault();
            document.querySelector('.carousel').scrollLeft -= e.movementX;
        },
        touchStart(e){
            this.touched = true;
            this.prevTouchX = e.targetTouches[0].pageX -  document.querySelector('.carousel').offsetLeft;
            this.scrollLeft = document.querySelector('.carousel').scrollLeft;
        },
        touchMove(e){
            if(!this.touched) return
            e.preventDefault();
            let x = e.targetTouches[0].pageX - document.querySelector('.carousel').offsetLeft;
            let walk = (x - this.prevTouchX) * 2;
            document.querySelector('.carousel').scrollLeft = this.scrollLeft - walk;
        },
        dragCircle(e){
            this.circle.x = e.clientX + document.querySelector('.carousel').scrollLeft;
            this.circle.y = e.layerY;
            if(e.path.length >= 10){
                this.circle.active = true;
            }else{
                this.circle.active = false;
            }
        }
    },
}
</script>
<style lang="scss" scoped src="./Expertise.style.scss">
</style>