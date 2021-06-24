<template>
    <div class="aheader-container">
        <div class="parallax">
            <video ref="video" muted="muted" data-scroll="" playsinline="" data-scroll-speed="-3" autoplay="" loop="loop" data-poster="@/images/trophy.jpg" poster="@/images/trophy.webp" >
                    <source src="@/images/trophy.mp4" type="video/mp4">>
            </video>
        </div>
        <div class="header" ref="header">
            <div class="reveal-item"><h3>/ awards</h3></div>
            <div class="title">
                <div class="reveal-item"><h1>Award-winning</h1></div>
                <div class="reveal-item"><h1>Digital Agency.</h1></div>
            </div>
            <div class="reveal-item">
                <div class="badges">
                    <img src="https://fleava.com/assets/img/awards/badge_white.webp" alt="">
                    <img src="https://fleava.com/assets/img/awards/badge_white_cssda.webp" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        observer: null,
    }),
    props:{
        headerData: Object,
    },
    mounted() {
        this.observer = new IntersectionObserver((entries)=> {
            entries.forEach(entry => {
                if(!entry.isIntersecting) return;
               this.$refs.header.classList.add('header-active');
               this.observer.unobserve(entry.target);
            })
        });
        this.observer.observe(this.$refs.header);
    },
}
</script>
<style lang="scss" scoped src="./AwardsHeader.style.scss">
</style>