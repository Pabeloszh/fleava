<template>
    <div class="exslider-container" ref="cardsCont">
        <div class="cards" ref="cards">
            <div class="first-card" v-if="data.title && data.desc">
                <h2>{{data.title}}</h2>
                <p>{{data.desc}}</p>
            </div>
            <ExpertiseCard v-for="card in data.cards" :key="card.name" :data="card"/>
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
        observer: null,
        options: {
            rootMargin: '80px',
            threshold: 1.0
        },
        contX: 0,
    }),
    mounted() {
        this.observer = new IntersectionObserver((entries)=> {
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    console.log('out')
                    this.$refs.cards.style.transform = 'translateX(0px)'
                    return;
                }
                console.log('in')
            })
        }, this.options);
        this.observer.observe(this.$refs.cardsCont);
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (e) {
            let width = this.$refs.cards.getBoundingClientRect().width;
            // console.log(this.$refs.cardsCont.getBoundingClientRect())
            if(this.$refs.cardsCont.getBoundingClientRect().top <= -160 && this.contX > -width){
                window.scrollTo(0,this.$refs.cardsCont.offsetTop + 160)
                this.contX -= 50;
                // console.log(this.contX)
                this.$refs.cards.style.transform = `translateX(${this.contX}px)`

            }
        }
    }
    
}
</script>
<style lang="scss" scoped src="./ExpertiseSlider.style.scss">
</style>