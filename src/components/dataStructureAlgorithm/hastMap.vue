<template>
  <h2>hastMap</h2>
</template>
<script>
export default {
  data () {
    return {}
  }
}
class HashMap {
  constructor () {
    this.table = []
  }
  loseloseHashCode = function (key) {
    var position = 0
    for (let i = 0, iLen = key.length; i < iLen; i++) {
      position += key.charCodeAt(i)
    }
    return position
  }
  djb2HashCode = function (key) {
    var hash = 5381
    for (let i = 0, iLen = key.length; i < iLen; i++) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
  }
  put (key, value) {
    this.table[this.loseloseHashCode(key)] = value
  }
  remove (key) {
    this.table[this.loseloseHashCode(key)] = undefined
  }
  get (key) {
    return this.table[this.loseloseHashCode(key)]
  }
  print () {
    for (let i = 0, iLen = this.table.length; i < iLen; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ', ' + this.table[i])
      }
    }
  }
}
let hashmap0 = new HashMap()
console.log(hashmap0)
</script>
<style>


</style>
