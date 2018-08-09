<template>
  <div class="routeFirst">
    <h2>{{title}}</h2>
    <div class="left">
      <router-link to="/route/first/one">one</router-link>
      <!--  <span @click="gotoOne()">one</span> -->
      <router-link to="/route/first/two">two</router-link>
      <router-link to="/route/first/three">three</router-link>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'routeFirst page'
      }
    },
    methods: {
      // gotoOne () {
      //   this.$router.push('one')
      // }
    }
  }
</script>

<style lang="scss">
  .routeFirst {
    width: 100%;
    border: 1px solid #193;
    padding: 10px;
  }
  .left {
    width: 30%;
    border: 1px solid #829;
    float: left;
  }
  .right {
    width: 65%;
    border: 1px solid #829;
    float: left;
  }
  .empty {
    clear: both;
  }
</style>