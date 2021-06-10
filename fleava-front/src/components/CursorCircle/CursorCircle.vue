<template>
    <div class="circle-container" v-bind:style="{ top: circle.y + 'px', left: `calc(-22.5vw - 18px + ${circle.x}px)`, color: circle.color, border: circle.border, backgroundColor: circle.bgColor, visibility: circle.active ? 'visible' : 'hidden', opacity: circle.active ? '1' : '0'}">
        <p>{{circle.title}}</p>
    </div>
</template>
<script>
export default {
    props:{
        circle: Object,
    },

    // watch:{
    //     circle: {
    //         immediate: true,
    //         deep: true,
    //         handler (val) {
    //             document.querySelector('.circle-container').style.transform = 'scale(.5)'
    //         },
    //     }
    // }
}
</script>
<style lang="scss" scoped src="./CursorCircle.style.scss">
</style>