<template>
  <div>
    <Navbar/>
    <Menu/>
    <slot/>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Navbar from "@/components/Navbar/Navbar";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer"
export default {
  components: {
    Navbar,
    Menu,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
