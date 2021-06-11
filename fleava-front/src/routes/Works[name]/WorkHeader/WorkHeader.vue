<template>
    <div class="wheader-container">
        <div class="parallax">
            <img :src="wHeaderData.mainImg" alt="" ref="prlxImg">
        </div>
        <div class="wheader" ref="wHeader">
            <div class="reveal-item" v-if="wHeaderData.name"><h3>/ <span>{{wHeaderData.dir}}</span> - {{wHeaderData.name}}</h3></div>
            <div class="title">
                <div class="reveal-item"><h1>{{wHeaderData.title1}}</h1></div>
                <div class="reveal-item" v-if="wHeaderData.title2"><h1>{{wHeaderData.title2}}</h1></div>
                <div class="reveal-item" v-if="wHeaderData.title3"><h1>{{wHeaderData.title3}}</h1></div>
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
        wHeaderData: Object,
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