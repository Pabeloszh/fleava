<template>
    <div class="mobile-container">
        <div class="desc">
            <h3 v-if="data.name">/ {{data.name}}</h3>
            <p v-if="data.desc">{{data.desc}}</p>
        </div>
        <div class="imgs" ref="mbImg">
            <img v-for="img in data.images" :key="img.url" :src="`http://localhost:1337${img.url}`" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    },
    data(){
        return{
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