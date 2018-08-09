<template>
  <div class="eleThree">
    <h3 v-html="title"></h3>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'three page'
      }
    }
  }
</script>

<style lang="scss">
  .eleThree {
    border: 1px solid #123;
    padding: 3px;
  }
</style>