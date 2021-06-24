<template>
    <div class="trusted-container">
        <h3>/ trusted by</h3>
        <div class="logos" v-if="trusteds">
            <img :src="`http://localhost:1337${trusted.node.logo.formats.thumbnail.url}`" alt="" v-for="trusted in trusteds" :key="trusted.node.id">
        </div>
    </div>
</template>
<static-query>
    query{
        trusteds: allPostedTrusteds{
            edges{
                node{
                    id,
                    logo{
                        formats{
                            thumbnail{
                                url
                            }
                        }
                    }
                }
            }
        }
    }
</static-query>
<script>
export default {
    data(){
        return {
            trusteds: null
        }
    },
    mounted(){
        this.trusteds = this.$static.trusteds.edges
        console.log(this.trusteds)
    }
}
</script>
<style lang="scss" scoped src="./BrandsTrusted.style.scss">
</style>