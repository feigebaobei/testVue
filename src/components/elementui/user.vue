<template>
  <div class="eleUser">
    <h3 v-html="title"></h3>
    <p v-html="'welcome to here, ' + $route.params.userId"></p>
    <p>{{uid}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'user page',
        uid: ''
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        console.log(this)
        var userId = this.$route.params.userId
        this.uid = userId
      }
    }
  }
</script>

<style lang="scss">
  .eleUser {
    border: 1px solid #123;
    padding: 3px;
  }
</style>