<template>
    <div class="agency-container" @mousemove="dragCircle" @mouseleave="() => circle.active = false">
        <div class="parallax">
            <g-image src="~/images/about.webp" alt="" ref="prlx"/>
        </div>
        <div class="desc">
            <h3>/ the agency</h3>
            <h1>We do amazing<br/>things with amazing<br/>People.</h1>
        </div>
        <CursorCircle :circle="circle"/>
    </div>
</template>
<script>
import CursorCircle from "@/components/CursorCircle/CursorCircle"
export default {
    components:{
        CursorCircle
    },
        data(){
        return{
            circle: {
                active: false,
                title: 'About',
                bgColor:'#fff',
                color:"#000",
                border: "1px solid #fff",
                x: 0,
                y: 0,
            },
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            this.$refs.prlx.style.top = `${-(this.$refs.prlx.getBoundingClientRect().y) * 0.35}px`;
        },
        dragCircle(e){
            this.circle.x = e.clientX + document.querySelector('.agency-container').scrollLeft + (window.innerWidth * 0.24);
            this.circle.y = e.pageY - document.querySelector('.agency-container').offsetTop - 20;
            this.circle.active = true;
        }
    }
}
</script>
<style lang="scss" scoped src="./Agency.style.scss">
</style>