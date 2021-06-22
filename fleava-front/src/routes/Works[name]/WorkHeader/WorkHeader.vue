<template>
    <div class="wheader-container">
        <div class="parallax" v-if="data.mainImg">
            <img :src="`http://localhost:1337${data.mainImg}`" alt="" ref="prlxImg">
        </div>
        <div class="wheader" ref="wHeader">
            <div class="reveal-item" v-if="data.name">
                <h3>/ 
                <span v-if="this.$route.path.includes('works')">works</span>
                <span v-else>expertise</span>
                 - {{data.name}}
                </h3>
            </div>
            <div class="title">
                <div class="reveal-item"><h1>{{data.title1}}</h1></div>
                <div class="reveal-item" v-if="data.title2"><h1>{{data.title2}}</h1></div>
                <div class="reveal-item" v-if="data.title3"><h1>{{data.title3}}</h1></div>
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
        data: Object,
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
        this.observer = new IntersectionObserver((entries)=> {
            entries.forEach(entry => {
                if(!entry.isIntersecting) return;
               this.$refs.wHeader.classList.add('wheader-active');
               this.observer.unobserve(entry.target);
            })
        });
        this.observer.observe(this.$refs.wHeader);
    },
    methods: {
        handleScroll () {
            this.$refs.prlxImg.style.transform = `translateY(${-(this.$refs.prlxImg.getBoundingClientRect().y) * 0.35}px)`;
        }
    },
}
</script>

<style lang="scss" scoped src="./WorkHeader.style.scss">
</style>