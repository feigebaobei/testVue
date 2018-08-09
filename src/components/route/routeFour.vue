<template>
  <div class="routeFour">
    <h2>{{title}}</h2>
    <p>id: {{$route.params.id}}</p>
    <div class="left">
    </div>
    <div class="right">
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'routeFour page'
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
  .routeFour {
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