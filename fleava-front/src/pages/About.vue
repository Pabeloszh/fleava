<template>
    <Layout>
        <Header/>
        <AboutDesc/>
        <AboutBanner/>
        <AboutBrands/>
    </Layout>
</template>
<script>
import Header from "@/routes/About/Header/Header";
import AboutDesc from "@/routes/About/AboutDesc/AboutDesc.vue";
import AboutBanner from "@/routes/About/AboutBanner/AboutBanner";
import AboutBrands from "@/routes/About/AboutBrands/AboutBrands"
export default {
    components:{
        Header,
        AboutDesc,
        AboutBanner,
        AboutBrands
    }
}
</script>
<style>
</style>