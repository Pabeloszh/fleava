<template>
    <Layout>
        <Header :headerData="headerData"/>
        <BrandsDesc/>
        <BrandsTrusted/>
        <BrandsList/>
    </Layout>
</template>
<script>
import Header from "@/components/Header/Header"
import BrandsDesc from "@/routes/Brands/BrandsDesc/BrandsDesc"
import BrandsTrusted from "@/routes/Brands/BrandsTrusted/BrandsTrusted"
import BrandsList from "@/routes/Brands/BrandsList/BrandsList"
export default {
    components:{
        Header,
        BrandsDesc,
        BrandsTrusted,
        BrandsList
    },
    data(){
        return{
            headerData: {
                name: "brands",
                title1: "We help businesses",
                title2: "all around the world",
                title3: "to grow.",
            }
        }
    },
}
</script>
<style>
</style>