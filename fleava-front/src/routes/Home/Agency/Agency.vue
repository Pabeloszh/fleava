<template>
    <div class="agency-container">
        <div class="parallax"></div>
        <div class="desc">
            <h3>/ the agency</h3>
            <h1>We do amazing<br/>things with amazing<br/>People.</h1>
        </div>
    </div>
</template>
<script>
export default {
    // data: () => ({
    //     observer: null,
    // }),
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    // mounted() {
    //     this.observer = new IntersectionObserver((entries)=> {
    //         entries.forEach(entry => {
    //             if(!entry.isIntersecting){
    //                 this.isInView = false;
    //                 return;
    //             }
    //            this.isInView = true;
    //         })
    //     });
    //     this.observer.observe(document.querySelector('.agency-container .desc'));
    // },
    methods: {
        handleScroll () {
            document.querySelector('.parallax').style.backgroundPosition = `center ${-(document.querySelector('.parallax').getBoundingClientRect().y) * 0.35}px`;
            // let startY = document.querySelector('.agency-container').getBoundingClientRect().height * 0.4;
            // let y = document.querySelector('.agency-container .desc').getBoundingClientRect(); 
            // let endY = document.querySelector('.agency-container').getBoundingClientRect().height * 0.6;

            // if(-(document.querySelector('.agency-container .desc').getBoundingClientRect().y) * 0.55 > -startY){
            //     // console.log(123)
            //     // document.querySelector('.agency-container .desc').style.top = `${startY + y}px`;
            // }
            // document.querySelector('.agency-container .desc').style.top = `${-(document.querySelector('.agency-container .desc').getBoundingClientRect().y) * 0.55 + startY}px`;
        }
    }
}
</script>
<style lang="scss" scoped src="./Agency.style.scss">
</style>