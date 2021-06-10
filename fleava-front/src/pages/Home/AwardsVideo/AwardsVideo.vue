<template>
    <div class="aw-video-container" ref="awCont">
        <div>
            <video ref="video" muted="muted" data-scroll="" playsinline="" data-scroll-speed="-3" autoplay="" loop="loop" data-poster="https://fleava.com/assets/img/awards/trophy.jpg" poster="https://fleava.com/assets/img/awards/trophy.webp" >
                <source src="https://fleava.com/assets/img/awards/trophy.mp4" type="video/mp4">>
            </video>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        observer: null,
    }),
    mounted() {
        // console.log()
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
        }
    }
}
</script>
<style lang="scss" scoped src="./AwardsVideo.style.scss">
</style>