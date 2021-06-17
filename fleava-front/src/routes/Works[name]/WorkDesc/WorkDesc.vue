<template>
    <div class="wdesc-container">
        <div class="content">
            <div>
                <div>
                    <p>Strategy</p>
                    <p>UX/UI Design</p>
                    <p>Website</p>
                    <p>Copywriting</p>
                    <p>Media Production</p>
                </div>
                <div>
                    <h4>
                        {{data.desc}}
                    </h4>
                </div>
            </div>
            <p>Visit Website -></p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data: Object,
    }
}
</script>
<style lang="scss" scoped src="./WorkDesc.style.scss">

</style>