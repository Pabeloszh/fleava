<template>
    <div class="header-container" >
        <div class="header" ref="header">
            <div class="reveal-item" v-if="headerData.name"><h3>/ {{headerData.name}}</h3></div>
            <div class="title">
                <div class="reveal-item"><h1>{{headerData.title1}}</h1></div>
                <div class="reveal-item"><h1>{{headerData.title2}}</h1></div>
                <div class="reveal-item"><h1>{{headerData.title3}}</h1></div>
            </div>
            <div class="reveal-item"><p>Scroll down</p></div>
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

<style lang="scss" scoped src="./Header.style.scss">
</style>