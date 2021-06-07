<template>
<div>
    <div class="grayScale"></div>
    <div class="overlay">
        <div class="main">
            <h1>Home</h1>
            <h1>Works <sup>10</sup></h1>
            <h1>Expertise <sup>06</sup></h1>
            <h1>About</h1>
            <h1>Journal <sup>19</sup></h1>
        </div>
        <div>
            <div class="location">
                <div>
                    <h3>Singapore</h3>
                    <p>160 Robinson Road, #14-04 Singapore Business Federation Centre - 068914, Singapore</p>
                </div>
                <div>
                    <h3>Bali</h3>
                    <p>Jalan Merta Agung, No.25, Kerobokan Kelod, Badung, Bali - 80361, Indonesia</p>
                </div>
            </div>
            <div class="sec">
                <div>
                    <h3>Awards <sup>43</sup></h3>
                    <h3>Brands <sup>103</sup></h3>
                    <h3>Careers <sup>04</sup></h3>
                </div>
                <div>
                    <h3>Inquiries</h3>
                    <h3>Contact Us</h3>
                    <h3>Transform</h3>
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
                    <p>Terms.</p>
                    <p>Sitemap.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="menu-button" @click="toggleMenu">
        <div class="untoggled">
            <hr>
            <p>MENU</p>
            <hr>
        </div>
        <div class="toggled">
            <hr>
        </div>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        toggleMenu(){
            document.querySelector('.menu-button').classList.toggle('menu-active');
            document.querySelector('.grayScale').classList.toggle('grayScale-active');
            document.querySelector('.overlay').classList.toggle('overlay-active');
        }
    }
}
</script>
<style lang="scss" scoped src="./Menu.style.scss">
</style>