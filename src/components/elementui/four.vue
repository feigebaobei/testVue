<template>
  <div class="eleFour">
    <h3 v-html="title"></h3>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'four page'
      }
    }
  }
</script>

<style lang="scss">
  .eleFour {
    border: 1px solid #123;
    padding: 3px;
  }
</style>