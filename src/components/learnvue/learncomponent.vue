<template>
  <div>
    <h2>固定内容</h2>  
    <table>
      <tr is="tr-row"></tr>
      <!-- <tr-row></tr-row> -->
    </table>
    <h2>静态prop</h2>
    <propst message="hello"></propst>
    <h2>动态prop</h2>
    <propa :number="count"></propa>
    <button @click="addnumber">+1</button>
    <h2>prop验证</h2>
    <propcheck></propcheck>
  </div>
</template>
<script>
  import trRow from './trRow.vue'
  import propst from './propst.vue'
  import propa from './propa.vue'
  import propcheck from './propcheck.vue'

  export default {
    data: function () {
      return {
        count: parseInt(window.localStorage.count) || 0
      }
    },
    components: {
      trRow: trRow,
      propst: propst,
      propa: propa,
      propcheck: propcheck
    },
    computed: {
    },
    methods: {
      addnumber: function () {
        this.count += 1
        this.saveLocal()
      },
      saveLocal: function () {
        window.localStorage.count = this.count
        // console.log(window.localStorage.count)
      }
    }
  }
</script>
<style lang="scss">
  
</style>