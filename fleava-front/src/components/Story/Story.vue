<template>
  <div class="story-container" @click="$router.push(`/journal/${data.name.replace(/\s+/g, '-').toLowerCase()}`)">
      <h3>/ 1</h3>
      <div>
        <h2>{{data.title}}</h2>
        <div>
            <p>{{data.desc}}</p>
            <span>{{data.tagName}}</span>
        </div>
      </div>
      <h1>+</h1>
  </div>
</template>

<script>
export default {
  props:{
    data: Object
  }
}
</script>

<style lang="scss" scoped src="./Story.style.scss">
</style>