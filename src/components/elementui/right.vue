<template>
  <div class="eleRight">
    <router-view></router-view>
    <test-view></test-view>
    <hr>
    <p>同级多个视图</p>
    <router-view name="firstView"></router-view>
    <router-view name="secondView"></router-view>
    <router-view name="threeView"></router-view>
  </div>
</template>

<script>
  import testView from './testView.vue'
  export default {
    data () {
      return {}
    },
    components: {
      testView
    }
  }
</script>

<style lang="scss">
  .eleRight {
    width: calc( 100% - 310px );
    float: left;
  }
</style>