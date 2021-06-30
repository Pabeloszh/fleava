<template>
<div>
    <div class="grayScale"></div>
    <div class="overlay">
        <div class="main">
            <h1 @click="$router.push('/')">Home</h1>
            <h1 @click="$router.push('/works')">Works <sup v-if="$static.works.totalCount">{{$static.works.totalCount > 10 ? $static.works.totalCount : "0" + $static.works.totalCount}}</sup></h1>
            <h1 @click="$router.push('/expertise')">Expertise <sup v-if="$static.works.totalCount">{{$static.expertise.totalCount > 10 ? $static.expertise.totalCount : "0" + $static.expertise.totalCount}}</sup></h1>
            <h1 @click="$router.push('/about')">About</h1>
            <h1 @click="$router.push('/journal')">Journal <sup v-if="$static.works.totalCount">{{$static.journal.totalCount > 10 ? $static.journal.totalCount : "0" + $static.journal.totalCount}}</sup></h1>
        </div>
        <div>
            <div class="location">
                <div @click="$router.push('/singapore')">
                    <h3>Singapore</h3>
                    <p>160 Robinson Road, #14-04 Singapore Business Federation Centre - 068914, Singapore</p>
                </div>
                <div @click="$router.push('/bali')">
                    <h3>Bali</h3>
                    <p>Jalan Merta Agung, No.25, Kerobokan Kelod, Badung, Bali - 80361, Indonesia</p>
                </div>
            </div>
            <div class="sec">
                <div>
                    <h3 @click="$router.push('/awards')">Awards <sup>43</sup></h3>
                    <h3 @click="$router.push('/brands')">Brands <sup>103</sup></h3>
                    <h3 @click="$router.push('/careers')">Careers <sup v-if="$static.careers.totalCount">{{$static.careers.totalCount > 10 ? $static.careers.totalCount : "0" + $static.careers.totalCount}}</sup></h3>
                </div>
                <div>
                    <h3 @click="$router.push('/')">Inquiries</h3>
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
<static-query>
    query{
        works: allPostedWorks{
            totalCount
        }
        expertise: allPostedExpertise{
            totalCount
        }
        journal: allPostedJournal{
            totalCount
        }
        careers: allPostedCareers{
            totalCount
        }
    }
</static-query>
<script>
export default {
    methods: {
        toggleMenu(){
            document.querySelector('.menu-button').classList.toggle('menu-active');
            document.querySelector('.grayScale').classList.toggle('grayScale-active');
            document.querySelector('.overlay').classList.toggle('overlay-active');
        }
    },
    mounted(){
        console.log(this.$static.works.totalCount)
    }
}
</script>
<style lang="scss" scoped src="./Menu.style.scss">
</style>