<template>
  <div class="routeSecond">
    <h3 v-html="title"></h3>
    <p>date: {{date}}</p>
  </div>
</template>

<script>
  export default {
    props: ['date'],
    data () {
      return {
        title: 'routeSecond page',
        uid: ''
      }
    }
  }
</script>

<style lang="scss">
  .routeSecond {
    border: 1px solid #123;
    padding: 3px;
  }
</style>