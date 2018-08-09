<template>
  <div class="eleLeft">
    <nav class="nav">
      <div class="item">
        <router-link to="/elementui/first">
          first
        </router-link>
      </div>
      <div class="item">
        <router-link to="/elementui/second">second</router-link>
      </div>
      <div class="item">
        <router-link to="/elementui/three">three</router-link>
      </div>
      <div class="item">
        <router-link to="/elementui/first/four">four</router-link>
      </div>
      <div class="item">
        <el-button @click="gotoFirst()">first</el-button>
      </div>
      <div class="item">
        <el-button @click="gotoSecond()">second</el-button>
      </div>
      <div class="item">
        <el-button @click="gotoThree()">three</el-button>
      </div>
      <div class="item">
        <el-button @click="forward2()">前进2步</el-button>
      </div>
      <div class="item">
        <el-button @click="retreat2()">后退2步</el-button>
      </div>
      <div class="item">
        <el-button @click="gotoUser()">user</el-button>
      </div>
      <hr>
      <p>只作用于test-view</p>
      <div class="item">
        <el-button @click="gotoTVFirst()">tvFirst</el-button>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      gotoFirst () {
        this.$router.push('/elementui/first')
      },
      gotoSecond () {
        this.$router.push('/elementui/second')
      },
      gotoThree () {
        this.$router.push('/elementui/three')
      },
      forward2 () {
        this.$router.go(2)
      },
      retreat2 () {
        this.$router.go(-2)
      },
      gotoUser () {
        this.$router.push(
          {
            name: 'user',
            params: {
              userId: 'feiji'
            }
          }
        )
      },
      gotoTVFirst () {
        this.$router.push(
          {
            name: 'tvFirst'
          }
        )
      }
    }
  }
</script>

<style lang="scss">
  .eleLeft {
    width: 300px;
    float: left;
    margin: 0 10px 0 0;
    .nav {
      width: auto;
      border: 1px solid #333;
      .item {
        width: auto;
      }
      .item:hover {
        background: #dde9ff;
      }
    }
  }
</style>