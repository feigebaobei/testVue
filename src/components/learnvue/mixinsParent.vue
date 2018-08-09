<template>
  <div class="mixinxParent">
    <h2>mixinxParent</h2>
    <minvue></minvue>
    <span>{{message}}</span>
    <span>{{color}}</span>
  </div>
</template>

<script>
  import minvue from './mixinsChildren.vue'

  let mixin = {
    created: function () {
      console.log('from mixin')
    },
    data: function () {
      return {
        message: 'welcome'
      }
    }
  }
  export default {
    props: ['color'],
    data: function () {
      return {}
    },
    components: {
      minvue
    },
    mixins: [mixin],
    created: function () {
      console.log('from created')
    }
  }
</script>