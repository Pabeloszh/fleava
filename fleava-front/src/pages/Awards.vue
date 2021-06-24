<template>
    <Layout>
        <AwardsHeader/>
        <WorkMobile :data="awards"/>
        <AwardsRecognition/>
        <AwardsParallax/>
        <AwardsList/>
    </Layout>
</template>
<script>
import AwardsHeader from "@/routes/Awards/AwardsHeader/AwardsHeader"
import WorkMobile from "@/routes/Works[name]/WorkMobile/WorkMobile"
import AwardsRecognition from "@/routes/Awards/AwardsRecognition/AwardsRecognition"
import AwardsParallax from "@/routes/Awards/AwardsParallax/AwardsParallax"
import AwardsList from "@/routes/Awards/AwardsList/AwardsList"
export default {
    components:{
        AwardsHeader,
        WorkMobile,
        AwardsRecognition,
        AwardsParallax,
        AwardsList
    },
    data(){
        return{
            awards:{
                images: [
                    {url: '/uploads/aw1_97f587b2c9.webp'},
                    {url: '/uploads/aw2_bc71150747.webp'},
                    {url: '/uploads/aw3_7bc73b8b54.webp'},
                    {url: '/uploads/aw4_ee4fb4b381.webp'},
                    {url: '/uploads/aw5_6f89cdfdda.webp'},
                    {url: '/uploads/aw6_74b195aff1.webp'}
                ]
            }
        }
    }
}
</script>
<style>
</style>