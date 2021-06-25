<template>
    <div class="ccard-container" @click="toggleWork" ref="cardCont">
        <div class="num">
            <p>{{num > 10 ? (num+1) : "0" + (num+1)}}</p>
        </div>
        <div class="content" v-if="data">
            <h2>{{data.position}}</h2>
            <p>{{data.desc}}</p>
            <div>
                <span v-for="skill in data.careers_skills" :key="skill.id">{{skill.ability}}</span>
            </div>
        </div>
        <div class="icon">
            <span>+</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data: Array,
        num: Number
    },
    methods:{
        toggleWork(){
            let cards = Array.from(document.querySelectorAll('.ccard-container'));
            cards.forEach((card, i)=> i !== this.num && card.classList.remove('active'));
            cards[this.num].classList.toggle('active');
        }
    }
}
</script>
<style lang="scss" scoped src="./CareerCard.style.scss">
</style>