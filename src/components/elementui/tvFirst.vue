<template>
  <div class="eleTVFirst">
    <h3 v-html="title"></h3>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'testViewFirst page'
      }
    }
  }
</script>

<style lang="scss">
  .eleTVFirst {
    border: 1px solid #123;
    padding: 3px;
  }
</style>