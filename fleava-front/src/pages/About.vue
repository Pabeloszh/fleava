<template>
    <Layout>
        <Header/>
        <AboutDesc/>
        <AboutBanner/>
    </Layout>
</template>
<script>
import Header from "@/routes/About/Header/Header";
import AboutDesc from "@/routes/About/AboutDesc/AboutDesc.vue";
import AboutBanner from "@/routes/About/AboutBanner/AboutBanner";
export default {
    components:{
        Header,
        AboutDesc,
        AboutBanner
    }
}
</script>
<style>
</style>