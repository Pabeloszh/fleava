<template>
  <div class="footer-container">
      <div class="overlay"></div>
      <div class="desc" ref="footerDesc">
            <h1>hello@fleava.com</h1>
            <h2>Get in touch</h2>
            <div class="links">
                <div class="location">
                    <h3>Singapore</h3>
                    <p>160 Robinson Road, #14-04 Singapore Business Federation Centre - 068914, Singapore</p>
                </div>
                <div class="location">
                    <h3>Bali</h3>
                    <p>Jalan Merta Agung, No.25, Kerobokan Kelod, Badung, Bali - 80361, Indonesia</p>
                </div>
                <div class="nav">
                    <div>
                        <h3>Home</h3>
                        <h3>Works <sup>10</sup></h3>
                        <h3>Expertise <sup>06</sup></h3>
                        <h3>About</h3>
                        <h3>Journal <sup>19</sup></h3>
                    </div>
                    <div>
                        <h3>Awards <sup>43</sup></h3>
                        <h3>Brands <sup>103</sup></h3>
                        <h3>Careers <sup>04</sup></h3>
                        <h3>Inquiries</h3>
                        <h3>Contact Us</h3>
                        <h3>Transform</h3>
                    </div>
                </div>
            </div>
            <div class="social">
                <div>
                    <p>Fb</p>
                    <p>Ig</p>
                    <p>Tw</p>
                    <p>In</p>
                    <p>Bē</p>
                </div>
                <div>
                    <span>&copy;2021</span>
                    <p>Fleava.</p>
                    <p>Terms.</p>
                    <p>Sitemap.</p>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (e) {
            this.$refs.footerDesc.style.transform = `translateY(${-(this.$refs.footerDesc.getBoundingClientRect().y) * 0.35}px)`;
        }
    }
}
</script>

<style lang="scss" scoped src="./Footer.style.scss">
</style>