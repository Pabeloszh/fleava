<template>
    <Layout>
        <Header :headerData="headerData"/>
        <BrandsDesc/>
        <BrandsTrusted v-if="brands.trusted" :data="brands.trusted"/>
        <BrandsList v-if="brands.brands_lists" :data="brands.brands_lists"/>
        <BrandsPartners v-if="brands.partnership" :data="brands.partnership"/>
    </Layout>
</template>
<page-query>
    query{
        brands: allPostedBrands{
            edges{
                node{
                    id,
                    trusted{
                        id
                        formats{
                            thumbnail{
                                url
                            }
                        }
                    }
                    partnership{
                        formats{
                            thumbnail{
                                url
                            }
                        }
                    }
                    brands_lists{
                        year,
                        brands_descs{
                            id,
                            company,
                            link
                        }
                    }
                    
                }
            }
        }
    }
</page-query>
<script>
import Header from "@/components/Header/Header"
import BrandsDesc from "@/routes/Brands/BrandsDesc/BrandsDesc"
import BrandsTrusted from "@/routes/Brands/BrandsTrusted/BrandsTrusted"
import BrandsList from "@/routes/Brands/BrandsList/BrandsList"
import BrandsPartners from "@/routes/Brands/BrandsPartners/BrandsPartners"

export default {
    components:{
        Header,
        BrandsDesc,
        BrandsTrusted,
        BrandsList,
        BrandsPartners
    },
    data(){
        return{
            brands: null,
            headerData: {
                name: "brands",
                title1: "We help businesses",
                title2: "all around the world",
                title3: "to grow.",
            }
        }
    },
    mounted(){
        this.brands = this.$page.brands.edges[0].node
        console.log(this.brands)
    }
}
</script>
<style>
</style>