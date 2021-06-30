<template>
    <div class="exslider-container">
        <div class="space-holder">
        <div class="sticky">
        <div class="horizontal">
            <section role="feed" class="cards">
                    <div class="first-card" v-if="data.title && data.desc">
                        <h2>{{data.title}}</h2>
                        <p>{{data.desc}}</p>
                    </div>
                    <ExpertiseCard v-for="card in data.cards" :key="card.name" :data="card"/>

            </section>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
import ExpertiseCard from "@/routes/Expertise[name]/ExpertiseSlider/ExpertiseCard/ExpertiseCard"
export default {
    components:{
        ExpertiseCard
    },
    props:{
        data:Object
    },
    data: () => ({
        winWidth: window.innerWidth,
        spaceHolder: document.querySelector('.space-holder'),
        horizontal: document.querySelector('.horizontal')
    }),
    mounted() {
        this.spaceHolder = document.querySelector('.space-holder');
        this.horizontal = document.querySelector('.horizontal');
        this.spaceHolder.style.height = `calc(${this.calcDynamicHeight(this.horizontal)}px - 20vw - 300px)`;
        window.addEventListener('scroll', () => {
            const sticky = document.querySelector('.sticky');
            this.horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
        });

        window.addEventListener('resize', () => {
            this.winWidth = window.innerWidth
            this.spaceHolder.style.height = `calc(${this.calcDynamicHeight(this.horizontal)}px - 20vw - 300px)`;
            if(this.winWidth < 992){
                this.spaceHolder.style.height = `auto`;
                window.removeEventListener('scroll', () => {
                    const sticky = document.querySelector('.sticky');
                    this.horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
                });
            }
        });
    },
    methods: {
        calcDynamicHeight(ref) {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const objectWidth = ref.scrollWidth;
            return objectWidth - vw + vh + 150; 
        }
    }
    
}
</script>
<style lang="scss" scoped src="./ExpertiseSlider.style.scss">
</style>