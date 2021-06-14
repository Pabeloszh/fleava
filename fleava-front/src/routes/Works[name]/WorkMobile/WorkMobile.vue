<template>
    <div class="mobile-container">
        <div class="desc">
            <h3>/ mobile</h3>
            <p>The challenge comes when we're trying to combine Vintage Art Deco into the Modern Web. The result is surprisingly stunning. Strong lines, bold contrasts and luxurious textures.</p>
        </div>
        <div class="imgs" ref="mbImg">
            <img v-for="image in images" :key="image" src="https://fleava.com/assets/img/works/raia/m1.webp" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            images: [1,2,3,4,5,6,7,8,9,10,11,12],
            num: 1,
        }
    },
    created () {
        window.innerWidth > 992 && window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            Array.from(this.$refs.mbImg.childNodes).forEach((img, i)=>{
                // i !== this.num && (img.style.transform = `translateY(${(img.getBoundingClientRect().y) * 0.1}px)`)
                if(i===this.num){
                    img.classList.add('mid');
                    this.num +=3;
                } else{
                    img.classList.add('side');
                    
                }
            })
            document.querySelectorAll('.mid').forEach((mid) => {
                mid.style.transform = `translateY(${-(mid.getBoundingClientRect().y) * 0.25}px)`
            })
            document.querySelectorAll('.side').forEach((side) => {
                side.style.transform = `translateY(${(side.getBoundingClientRect().y) * 0.15}px)`
            })
        }
    }
}
</script>
<style lang="scss" scoped src="./WorkMobile.style.scss">
</style>