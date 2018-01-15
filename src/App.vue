<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav class="nav">
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/vuedraggable">vuedraggable</router-link>
    </nav>
    <div class="content">
      <router-view/>
    </div>
    <!-- <vuedraggable></vuedraggable> -->
    <!-- <hello></hello> -->
    <footer></footer>
  </div>
</template>

<script>
// import vuedraggable from './components/vueDraggable.vue'
// import hello from './components/hello.vue'
export default {
  name: 'app',
  components: {
    // vuedraggable: vuedraggable,
    // hello
  },
  computed: {
    ms: function () {
      return {
        color: 'red'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.nav > a {
  box-sizing: border-box;
  border: 1px solid #386;
  padding: 5px;
  margin: 5px 8px;
}
.content {
  margin: 15px auto;
  width: 980px;
}
footer {
  padding: 30px;
}
</style>
