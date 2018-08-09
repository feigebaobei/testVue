<template>
  <div class="eleTestView">
    <h3 v-html="title"></h3>
    <router-view name="testview"></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'testView page'
      }
    }
  }
</script>

<style lang="scss">
  .eleTestView {
    border: 1px solid #123;
    padding: 3px;
  }
</style>