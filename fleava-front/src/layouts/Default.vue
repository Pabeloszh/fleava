<template>
  <div>
  <Navbar/>
  <Menu/>
    <div class="content">
      <img src="https://fleava.com/assets/img/home/home.webp" alt="">
    </div>
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
  .content{
    height:100vh;
    width:100%;
    background-color:#000;
    img{
      width:100%;
      height:100%;
    }
  }
</style>
