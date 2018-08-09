<template>
  <div class="eleFirst">
    <h3 v-html="title"></h3>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'first page'
      }
    }
  }
</script>

<style lang="scss">
  .eleFirst {
    border: 1px solid #123;
    padding: 3px;
  }
</style>