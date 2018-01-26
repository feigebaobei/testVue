<template>
  <div>
    <h2>gether集合</h2>
    <dictionary></dictionary>
    <hastMap></hastMap>
  </div>
</template>

<script>
import dictionary from './dictionary.vue'
import hastMap from './hastMap.vue'
import {Stack, Queue, PriorityQueue, LinkedList, DoubleLinkedList, unionSet, insersection, containSet, diffSet, HasHTable, HashMap, BinarySearchTree, Graph} from './dataStructure.js'
export default {
  data () {
    return {}
  },
  components: {
    dictionary,
    hastMap
  }
}
// stack
// let Stack = Stack
let stack0 = new Stack()
stack0.push('a')
console.log(stack0)
let queue0 = new Queue()
queue0.enqueue('c')
console.log(queue0)
let pq0 = new PriorityQueue()
pq0.enqueue('a', 2)
pq0.enqueue('b', 1)
console.log(pq0)
console.log(pq0.size())
console.log(pq0.front())
let ll0 = new LinkedList()
ll0.append('a')
ll0.append('b')
ll0.append('c')
ll0.insert('d', 1)
console.log(ll0)
console.log(ll0.indexOf('d'))
console.log(ll0.toString())
let dll0 = new DoubleLinkedList()
dll0.append('a')
dll0.append('b')
dll0.append('c')
dll0.append('d')
dll0.append('b')
dll0.insert('e', 2)
console.log(dll0)
dll0.removeAt(3)
dll0.removeElement('b')
console.log(dll0)
let set3 = new Set()
set3.add('a')
set3.add('b')
set3.add('c')
let set4 = new Set()
set4.add('d')
set4.add('e')
set4.add('f')
// console.log(set3.insersection(set4))
console.log(unionSet(set3, set4))
let set5 = new Set()
set5.add('a')
set5.add('d')
set5.add('b')
console.log(insersection(set3, set5))
let set6 = new Set()
set6.add('a')
set6.add('b')
console.log(containSet(set3, set6))
console.log(containSet(set3, set5))
console.log(containSet(set3, set3))
console.log(diffSet(set3, set4))
console.log(diffSet(set3, set5))
// console.log(set3.size())
let ht0 = new HasHTable()
ht0.put('b', 'b')
ht0.put('a', 'a')
ht0.put('c', 'c')
ht0.put('a', 'tank')
console.log(ht0)
console.log(ht0.get('a'))
// console.log(ht0.get('b'))
// console.log(ht0.remove('b'))
// console.log(ht0.remove('c'))
console.log(ht0.remove('a'))
console.log(ht0)
let hm0 = new HashMap()
hm0.put('a', 'a1')
hm0.put('a', 'a2')
hm0.put('a', 'a3')
hm0.put('a', 'a4')
hm0.put('b', 'b')
hm0.put('c', 'c')
console.log(hm0)
console.log(hm0.get('a'))
console.log(hm0.get('b'))
console.log(hm0.get('c'))
console.log(hm0.getAll('a'))
let bst0 = new BinarySearchTree()
bst0.insert(11)
bst0.insert(7)
bst0.insert(15)
bst0.insert(5)
bst0.insert(13)
bst0.insert(20)
// bst0.insert(10)
console.log(bst0)
let printNode = function (value) {
  console.log(value)
}
bst0.inOrderTraverse(printNode)
bst0.preOrderTraverse(printNode)
console.log(bst0.search(7))
console.log(bst0.search(73))
bst0.remove(11)
console.log(bst0)
let graph0 = new Graph()
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0, iLen = myVertices.length; i < iLen; i++) {
  graph0.addVertex(myVertices[i])
}
// graph0.addVertex('A')
// graph0.addVertex('B')
// graph0.addVertex('C')
// graph0.addVertex('D')
graph0.addEdge('A', 'B')
graph0.addEdge('A', 'C')
graph0.addEdge('A', 'D')
graph0.addEdge('C', 'D')
graph0.addEdge('C', 'G')
graph0.addEdge('D', 'G')
graph0.addEdge('D', 'H')
graph0.addEdge('B', 'E')
graph0.addEdge('B', 'F')
graph0.addEdge('E', 'I')
console.log(graph0.toString())
console.log(graph0.bfs('A', printNode))
console.log(graph0.shortestPath('A', 'I'))
graph0.dfs('A', printNode)
graph0.DFS('A', printNode)
// console.log(54151)
// class Set {
//   constructor () {
//     this.items = {}
//   }
//   add (value) {
//     this.items[value] = value
//   }
//   has (value) {
//     return this.items.hasOwnProperty(value)
//   }
//   remove (value) {
//     if (this.has(value)) {
//       delete this.items[value]
//       return true
//     }
//     return false
//   }
//   clear () {
//     this.items = {}
//   }
//   size () {
//     return Object.keys(this.items).length
//   }
//   values () {
//     let values = []
//     for (let i in this.items) {
//       if (this.has(i)) {
//         values.push(this.items[i])
//       }
//     }
//     return values
//   }
//   // 集合操作
//   unicon (otherSet) {
//     let uniconSet = new Set()
//     let a = this.values()// 返回本集合的数据组成的数组
//     let b = otherSet.values()//
//     for (let i = 0, iLen = a.length; i < iLen; i++) {
//       uniconSet.add(a[i])
//     }
//     for (let i = 0, iLen = b.length; i < iLen; i++) {
//       uniconSet.add(b[i])
//     }
//     // for (let x of this.items) uniconSet.add(x)
//     // for (let x of otherSet) uniconSet.add(x)
//     return uniconSet
//   }
//   intersection (otherSet) {
//     let intersectionSet = new Set()
//     let a = this.values()
//     for (let i = 0, iLen = a.length; i < iLen; i++) {
//       if (otherSet.has(a[i])) {
//         intersectionSet.add(a[i])
//       }
//     }
//     return intersectionSet
//   }
//   difference (otherSet) {
//     let differenceSet = new Set()
//     for (let key in this.items) {
//       if (!otherSet.has(key)) {
//         differenceSet.add(key)
//       }
//     }
//     return differenceSet
//   }
//   sub (otherSet) {
//     if (this.size() > otherSet.size()) {
//       return false
//     } else {
//       let a = this.values()
//       for (let i = 0, iLen = a.length; i < iLen; i++) {
//         if (!otherSet.has(a[i])) {
//           return false
//         }
//       }
//       return true
//     }
//   }
// }
// let set0 = new Set()
// set0.add(1)
// set0.add(2)
// console.log(set0.remove(1))
// console.log(set0.items)
// set0.add(3)
// console.log(set0.size())
// console.log(set0.values())
// let set1 = new Set()
// set1.add('a')
// set1.add('b')
// set1.add(1)
// set1.add(3)
// console.log(set1.unicon(set0))
// console.log(set1.intersection(set0))
// console.log(set1.difference(set0))
// let set2 = new Set()
// set2.add(3)
// console.log(set2.sub(set1))
</script>

<style lang="scss">
  
</style>