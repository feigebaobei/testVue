<template>
  <div id="app">
    <h1>welcome from lixd.</h1>
    <img src="./assets/logo.png">
    <nav class="nav">
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/vuedraggable">vuedraggable</router-link>
      <router-link to="/learnform">learnform</router-link>
      <router-link to="/apivue">api vue</router-link>
      <router-link to="/learnttransition">learnttransition</router-link>
      <router-link to="/learncomponent">learncomponent</router-link>
      <router-link to="/learnclass">learnclass</router-link>
      <router-link to="/dataStructureAlgorithm">dataStructureAlgorithm</router-link>
      <router-link to="/algorithms">algorithms</router-link>
      <router-link to="/frontEndSplit">frontEndSplit</router-link>
      <router-link to="/elementui">elementui</router-link>
      <router-link to="/route">route</router-link>
    </nav>
    <div class="content">
        <router-view/>
    </div>
    <!-- <vuedraggable></vuedraggable> -->
    <!-- <hello></hello> -->
    <!-- <footer></footer> -->
    <footervue></footervue>
  </div>
</template>

<script>
// import vuedraggable from './components/vueDraggable.vue'
// import hello from './components/hello.vue'
import footer from './components/footer.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    // vuedraggable: vuedraggable,
    // hello
    footervue: footer
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
  display: inline-block;
}
.content {
  margin: 15px auto;
  width: 980px;
}
footer {
  padding: 30px;
}
</style>
