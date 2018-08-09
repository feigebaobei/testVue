<template>
  <div class="routeUser">
    <h3 v-html="title"></h3>
    <p>userId: {{userId}}</p>
    <router-view></router-view>
    <router-view name="second"></router-view>
  </div>
</template>

<script>
  export default {
    props: ['userId'],
    data () {
      return {
        title: 'user page',
        uid: ''
      }
    }
  }
</script>

<style lang="scss">
  .routeUser {
    border: 1px solid #123;
    padding: 3px;
  }
</style>