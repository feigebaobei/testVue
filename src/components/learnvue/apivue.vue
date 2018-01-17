<template>
  <div class="apivue">
    <p>{{firstName}} {{lastName}} aka {{alias}}</p>
    <h2>选项，组合</h2>
    <p>parent</p>
    <p>{{testparent}}</p>
    <p>mixins</p>
    <mixinsParent :color="colorData"></mixinsParent>
    <h2>extends</h2>
  </div>
</template>

<script>
  import mixins from './mixinsParent.vue'
  export default {
    data: function () {
      return {
        firstName: 'Walter',
        lastName: 'White',
        alias: 'Heisenberg',
        colorData: 'red'
      }
    },
    components: {
      mixinsParent: mixins
    },
    computed: {
      testparent: function () {
        console.log(this.$parent)
      }
    }
  }
</script>

<style>
  .apivue {

  }
</style>