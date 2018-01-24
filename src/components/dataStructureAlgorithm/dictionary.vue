<template>
  <h2>dictionary字典</h2>
</template>
<script>
export default {
  data () {
    return {}
  }
}
class Dictionary {
  constructor () {
    this.items = {}
  }
  set (key, value) {
    this.items[key] = value
  }
  has (key) {
    return key in this.items
  }
  delete (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }
  get (key) {
    return this.items[key]
  }
  clear () {
    this.items = {}
  }
  size () {
    return Object.keys(this.items).length
  }
  keys () {
    // let keys = []
    return Object.keys(this.items)
  }
  values () {
    var values = []
    for (let key in this.items) {
      values.push(this.items[key])
    }
    return values
  }
  getItems () {
    return this.items
  }
}
let dic0 = new Dictionary()
dic0.set('no', 2)
console.log(dic0.has('no'))
dic0.set('boo', 'feiji')
console.log(dic0.delete('no'))
console.log(dic0)
console.log(dic0.get('boo'))
console.log(dic0.size())
dic0.set('for', 'tank')
console.log(dic0.keys())
console.log(dic0.values())
</script>
<style>
</style>