<template>
  <div>
    <h2>algorithms</h2>
  </div>
</template>

<script>
import {ArrayList} from './algorithms.js'
export default {
  data () {
    return {}
  },
  components: {
  }
}
// algorithms
let arrlist0 = new ArrayList()
arrlist0.insert(1)
arrlist0.insert(2)
arrlist0.insert(3)
arrlist0.insert(8)
arrlist0.insert(4)
arrlist0.insert(9)
arrlist0.insert(7)
console.log(arrlist0)
console.log(arrlist0.toString())
// console.log(arrlist0.bubbleSort(0))
// console.log(arrlist0.insertionSort())
// console.log(arrlist0.mergeSort(arrlist0.array))
// arrlist0.quickSort(arrlist0.array, 0, 6)
console.log(arrlist0.array)
</script>

<style lang="scss">
  
</style>
