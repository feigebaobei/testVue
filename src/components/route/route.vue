<template>
  <div class="testRoute">
    <h2>{{title}}</h2>
    <button @click="gotofirst()">first</button>
    <button @click="gotosecond()">second</button>
    <button @click="gotothree()">three</button>
    <button @click="gotofour()">four</button>
    <button @click="gotofive()" title="会和全局导航守卫跳到/router/second">five</button>
    <button @click="gotosix()" title="会和全局导航守卫跳到/router/three">six</button>
    <button @click="gotouser()">user</button>
    <button @click="gotouser2()">user2</button>
    <hr>
      <router-view name="firstRoute"></router-view>
      <router-view name="secondRoute"></router-view>
      <router-view name="threeRoute"></router-view>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'route page',
        transitionName: 'slide-right'
      }
    },
    methods: {
      gotofirst () {
        console.log(this)
        this.$router.push('/route')
        // this.$router.push('one')
      },
      gotosecond () {
        this.$router.push('/route/second')
        // this.$router.push('two')
      },
      gotothree () {
        this.$router.push('/route/three')
      },
      gotofour () {
        this.$router.push('/route/four/1234')
      },
      gotofive () {
        this.$router.push('/route/five')
      },
      gotosix () {
        this.$router.push('/route/six')
      },
      gotouser () {
        this.$router.push('/route/user/1235')
      },
      gotouser2 () {
        this.$router.push('/route/routeUser/1235')
      }
    }
    // beforeRouteEnter (to, from, next) {
    //   console.log(to)
    //   console.log(from)
    //   const answer = window.confirm('真的要进去吗？')
    //   if (answer) {
    //     next()
    //   } else {
    //     next(false)
    //   }
    // },
    // beforeRouteUpdate (to, from, next) {
    //   this.name = to.params.name
    //   console.log(this)
    //   const answer = window.confirm('真的要刷新吗？')
    //   if (answer) {
    //     next()
    //   } else {
    //     next(false)
    //   }
    // },
    // beforeRouteLeave (to, from, next) {
    //   console.log(to)
    //   console.log(from)
    //   const answer = window.confirm('真的要离开吗？')
    //   if (answer) {
    //     next()
    //   } else {
    //     next(false)
    //   }
    // }
  }
</script>

<style lang="scss">
  .testRoute {
    width: 100%;
    border: 1px solid #193;
    padding: 10px;
  }
</style>