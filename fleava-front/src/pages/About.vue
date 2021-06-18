<template>
    <Layout>
        <Header/>
        <AboutDesc/>
    </Layout>
</template>
<script>
import Header from "@/routes/About/Header/Header";
import AboutDesc from "../routes/About/AboutDesc/AboutDesc.vue";
export default {
    components:{
        Header,
        AboutDesc
    }
}
</script>
<style>
</style>