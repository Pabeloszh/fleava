<template>
  <div>
    <Navbar/>
    <Menu/>
    <slot/>
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
export default {
  components: {
    Navbar,
    Menu
  }
}
</script>

<style lang="scss" scoped>
</style>
