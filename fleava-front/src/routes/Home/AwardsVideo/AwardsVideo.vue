<template>
    <div class="aw-video-container" ref="awCont">
        <div @mousemove="dragCircle" @mouseleave="() => circle.active = false">
            <video ref="video" muted="muted" data-scroll="" playsinline="" data-scroll-speed="-3" autoplay="" loop="loop" data-poster="@/images/trophy.jpg" poster="@/images/trophy.webp" >
                <source src="@/images/trophy.mp4" type="video/mp4">>
            </video>
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
    data() {
        return{
            observer: null,
            circle: {
                active: false,
                title: 'Awards',
                bgColor:'transparent',
                color:"#fff",
                border: "1px solid #fff",
                x: 0,
                y: 0,
            },
        }
    },
    mounted() {
        this.observer = new IntersectionObserver((entries)=> {
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    this.$refs.video.pause()
                    return;
                }
               this.$refs.video.play()
            })
        });
        this.observer.observe(this.$refs.awCont);
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            this.$refs.video.style.transform = `translateY(${-(this.$refs.video.getBoundingClientRect().y) * 0.35}px)`;
        },
        dragCircle(e){
            this.circle.x = e.clientX + document.querySelector('.aw-video-container div').scrollLeft + (window.innerWidth * 0.24);
            this.circle.y = e.layerY;
            this.circle.active = true;
            console.log(this.circle.x, this.circle.y)
        }
    }
}
</script>
<style lang="scss" scoped src="./AwardsVideo.style.scss">
</style>