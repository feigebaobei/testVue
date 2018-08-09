<template>
  <div class="routeThree">
    <h3 v-html="title"></h3>
    <!-- <p>userId: {{userId}}</p> -->
    <p>{{key}}</p>
  </div>
</template>

<script>
  export default {
    // props: ['userId'],
    props: ['key'],
    data () {
      return {
        title: 'routeThree page',
        uid: ''
      }
    }
  }
</script>

<style lang="scss">
  .routeThree {
    border: 1px solid #123;
    padding: 3px;
  }
</style>