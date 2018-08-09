/*
数据结构与算法
array.
  concat
  every(function(element, index, array) {})
  filter(function(curentValue, index, arr) {}, thisValue)
  forEach(function(curentValue) {})
  join
  indexOf
  lastIndexOf
  map(function (curentValue) {})
  reverse
  slice(start, end)
  some(function(curentValue) {})
  sort
  toString
  valueOf
  reduce(function(prevValue, nextValue, index, arr) {}, startValue)

stack
*/
// export {Stack, Queue}
// stack
// const items = new WeakMap()
class Stack {
  constructor () {
    this.items = []
    // items.set(this, [])
  }
  push (element) {
    // let s = items.get(this)
    // s.push(element)
    this.items.push(element)
  }
  pop (element) {
    // let s = items.get(this)
    // return s.pop()
    return this.items.pop(element)
  }
  peek () {
    return this.items[0]
  }
  size () {
    return this.items.length
  }
  clear () {
    this.items = []
  }
  isEmpty () {
    if (this.size() === 0) {
      return true
    }
    return false
  }
}
// queue
class Queue {
  constructor () {
    this.items = []
  }
  enqueue (element) {
    this.items.push(element)
  }
  dequeue () {
    return this.items.shift()
  }
  front () {
    return this.items[0]
  }
  isEmpty () {
    return this.size() === 0
  }
  size () {
    return this.items.length
  }
}
// priorityQueue
// usage
// pq.enqueue('a',1)
class PriorityQueue extends Queue {
  // constructor () {
  //   // this.items = []
  //   super()
  // }
  enqueue (element, priority) {
    let node = {element: element, priority: priority}
    let isAdd = false
    for (let i = 0, iLen = this.items.length; i < iLen; i++) {
      if (node.priority < this.items[i].priority) {
        this.items.splice(i, 0, node)
        isAdd = true
        break
      }
    }
    if (!isAdd) {
      this.items.push(node)
    }
  }
  dequeue () {
    return this.items.shift()
  }
}
// LinkedList
class LinkedList {
  constructor () {
    // this.items = []
    this.head = null
    this.length = 0
  }
  append (element) {
    let node = {
      element: element,
      next: null
    }
    let current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }
  insert (element, position) {
    if (position >= 0 && position <= this.length) {
      let node = {
        element: element,
        next: null
      }
      let prev
      let current
      let index = 0
      if (position === 0) {
        current = this.head
        this.head = node
        node.next = current
      } else {
        current = this.head
        while (index++ < position) {
          prev = current
          current = current.next
        }
        node.next = current
        prev.next = node
      }
      this.length++
    }
    return false
  }
  removeAt (position) {
    let prev
    let current
    let index = 0
    if (position >= 0 && position <= this.length) {
      if (position === 0) {
        current = this.head
        this.head = current.next
      } else {
        current = this.head
        while (index++ < position) {
          prev = current
          current = current.next
        }
        prev.next = current.next
      }
      this.length--
    }
    return current.element
  }
  toString () {
    let str = ''
    let current = this.head
    console.log(current)
    while (current) {
      str += current.element + (current.next ? ',' : '')
      current = current.next
    }
    return str
  }
  indexOf (element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  isEmpty () {
    return this.length === 0
  }
  size () {
    return this.length
  }
  getHead () {
    return this.head
  }
  getElement (position) {
    if (position >= 0 && position <= this.length - 1) {
      let current = this.head
      let index = 0
      while (current) {
        if (index++ < position) {
          current = current.next
        }
      }
      return current.element
    }
  }
}
// 双向链表
class DoubleLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }
  append (element) {
    let current
    let node = {
      element: element,
      prev: null,
      next: null
    }
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    }
    this.length++
  }
  insert (element, position) {
    if (position >= 0 && position <= this.length) {
      let node = {
        element: element,
        next: null,
        prev: null
      }
      let prev
      let current
      // let next
      let index = 0
      current = this.head
      if (position === 0) {
        if (this.head) { // 若存在元素
          current = this.head
          this.head = node
          node.next = current
          current.prev = node
        } else { // 若不存在元素
          this.head = node
          this.tail = node
        }
      } else if (position === this.length) { // 最后一个
        current = this.tail
        this.tail = node
        current.next = node
        node.prev = current
      } else { // 中间
        while (index++ < position) {
          prev = current
          current = current.next
        }
        prev.next = node
        node.next = current
        current.prev = node
        node.prev = prev
      }
      this.length++
      return true
    } else {
      return false
    }
  }
  removeAt (position) {
    if (position >= 0 && position <= this.length) {
      let index = 0
      let current
      let prev
      let next
      if (position === 0) { // no.1
        current = this.head
        next = current.next
        this.head = next
        next.prev = null
      } else if (position === this.length - 1) { // tail
        current = this.tail
        prev = current.prev
        this.tail = prev
        prev.next = null
      } else { // middle
        current = this.head
        while (index++ < position) {
          prev = current
          current = current.next
        }
        prev.next = current.next
        current.next.prev = prev
      }
      this.length--
      return current.element
    }
    return false
  }
  removeElement (element) {
    if (this.isEmpty()) {
      return false
    } else {
      let arr = []
      let current = this.head
      let elePosi
      while (current) {
        if (current.element === element) {
          // 判断位置
          elePosi = this.indexOf(element)
          arr.push(this.removeAt(elePosi))
        }
        current = current.next
      }
      return arr
    }
  }
  indexOf (element) {
    let index = 0
    let current = this.head
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  size () {
    return this.length
  }
  isEmpty () {
    return this.head === null
  }
  getHead () {
    if (this.isEmpty()) { // 不是空的
      return false
    } else {
      return this.head
    }
  }
  getTail () {
    if (this.isEmpty()) {
      return false
    } else {
      return this.tail
    }
  }
}
// Set
// 定义 prototype 会报警告
// Set.prototype.insersection = function (otherSet) {
//   let unionSet = new Set()
//   // console.log(this)
//   for (let x of this) unionSet.add(x)
//   for (let x of otherSet) unionSet.add(x)
//   return unionSet
// }
// 定义方法 // 并集
const unionSet = function (aSet, bSet) {
  let unionSet = new Set()
  for (let x of aSet) unionSet.add(x)
  for (let x of bSet) unionSet.add(x)
  return unionSet
}
// 交集
const insersection = function (aSet, bSet) {
  let insersection = new Set()
  for (let x of aSet) {
    if (bSet.has(x)) {
      insersection.add(x)
    }
  }
  return insersection
}
// 是否是子集
const containSet = function (pSet, cSet) {
  for (let x of cSet) {
    if (!pSet.has(x)) {
      return false
    }
  }
  return true
}
// 差集
const diffSet = function (aSet, bSet) {
  let diff = new Set()
  for (let x of aSet) {
    if (!bSet.has(x)) {
      diff.add(x)
    }
  }
  return diff
}
// 字典
// 在ES6里就是Map类
/*
map.set('key','value')
map.has('key')
map.size
map.keys()
map.values()
map.get('key')
map.delete('key')
*/
// hashTable
class HasHTable { // 使用分离链接
  constructor () {
    this.table = []
  }
  valuePair (key, value) {
    return {
      key: key,
      value: value,
      toString: '[' + key + ', ' + value + ']'
    }
  }
  djb2HashCode (key) {
    let hash = 5381
    for (let i = 0, iLen = key.length; i < iLen; i++) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013// 使用一个比数组容量（1000）较大一点儿的随机质数（我喜欢1013）
  }
  put (key, value) {
    let position = this.djb2HashCode(key)
    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList()
    }
    this.table[position].append(this.valuePair(key, value))
  }
  remove (key) { // 删除第一与key值相等的
    let position = this.djb2HashCode(key)
    let linkedlist = this.table[position]
    // linkedlist.
    // let prev
    let current = linkedlist.getHead()
    let index = 0
    // if (current.element.key === key) {
    //   return linkedlist.removeAt(index)
    // }
    // current = current.next
    // index++
    while (current) {
      if (current.element.key === key) {
        // prev.next = current.next
        return linkedlist.removeAt(index)
      }
      // prev = current
      current = current.next
      index++
    }
    return false
  }
  getAll (key) { // 得到所有key值相等的value
    let position = this.djb2HashCode(key)
    let current = this.table[position].getHead()
    let arr = []
    while (current) {
      if (current.element.key === key) {
        // return current.element.value
        console.log(current.element.value)
        arr.push(current.element.value)
      }
      current = current.next
    }
    if (arr.length !== 0) {
      return arr
    }
    return undefined
  }
  get (key) {
    let position = this.djb2HashCode(key)
    let current = this.table[position].getHead()
    while (current) {
      if (current.element.key === key) {
        return current.element.value
      }
      current = current.next
    }
    return undefined
  }
}
//
class HashMap { // 使用线性探查
  constructor () {
    this.map = []
  }
  valuePair (key, value) {
    return {
      key: key,
      value: value,
      toString: '[' + key + ', ' + value + ']'
    }
  }
  djb2HashCode (key) {
    let hash = 5381
    for (let i = 0, iLen = key.length; i < iLen; i++) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013// 使用一个比数组容量（1000）较大一点儿的随机质数（我喜欢1013）
  }
  put (key, value) {
    let position = this.djb2HashCode(key)
    if (this.map[position] === undefined) {
      this.map[position] = this.valuePair(key, value)
    } else {
      let index = ++position
      while (this.map[index] !== undefined) {
        index++
      }
      this.map[index] = this.valuePair(key, value)
    }
  }
  remove (key) {
    let position = this.djb2HashCode(key)
    if (this.map[position] !== undefined) {
      if (this.map[position].key === key) {
        this.map[position] = undefined
      } else {
        let index = ++position
        while (this.map[index] === undefined || this.map[index].key !== key) {
          index++
        }
        if (this.map[index].key === key) {
          this.map[position] = undefined
        }
      }
    } else {
      return undefined
    }
  }
  get (key) { // 得到第一个与key相等的值
    let position = this.djb2HashCode(key)
    if (this.map[position] !== undefined) {
      if (this.map[position].key === key) {
        return this.map[position].value
      } else {
        let index = ++position
        while (this.map[index] === undefined || this.map[index].key !== key) {
          index++
        }
        if (this.map[index].key === key) {
          return this.map[index].value
        }
      }
    } else {
      return undefined
    }
  }
  getAll (key) {
    let position = this.djb2HashCode(key)
    let arr = []
    let index = position
    while (index < this.map.length) {
      if (this.map[index].key === key) {
        arr.push(this.map[index].value)
      }
      index++
    }
    return arr
  }
}
// BinarySearchTree
class BinarySearchTree {
  constructor () {
    this.root = null
  }
  node (key) {
    return {
      key: key,
      left: null,
      right: null
    }
  }
  insert (key) {
    let newNode = this.node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  search (key) {
    return this.searchNode(this.root, key)
  }
  searchNode (node, key) { // 判断是否有指定的key.返回 true/false
    if (node === null) {
      return false
    }
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else {
      if (node.key < key) {
        return this.searchNode(node.right, key)
      } else {
        return true
      }
    }
  }
  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode (node, callback) {
    if (node !== null) {
      callback(node.key)
      this.inOrderTraverseNode(node.left, callback)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      this.inOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  min () {
    return this.minNode(this.root)
  }
  minNode (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }
  max () {
    return this.maxNode(this.root)
  }
  maxNode (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }
  remove (key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode (node, key) {
    if (node === null) return null
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (node.key < key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 一个叶节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      // 一个只有一个叶子节点的节点
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      // 有两个子节点
      let aux = this.findMinNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
  findMinNode (node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
}
// AVL
// Graph
class Graph {
  constructor () {
    this.vertices = []
    this.adjList = new Map()
  }
  // add element
  addVertex (v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }
  // add edge
  addEdge (v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }
  // to string
  toString () {
    let s = ''
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      s += this.vertices[i] + '-> '
      let neighbores = this.adjList.get(this.vertices[i])
      for (let j = 0, jLen = neighbores.length; j < jLen; j++) {
        s += neighbores[j] + ' '
      }
      s += '\n'
    }
    return s
  }
  // color
  initializeColor () {
    let color = []
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      color[this.vertices[i]] = 'white'
    }
    return color
  }
  // Breadth-First Search
  bfs (v, callback) {
    let color = this.initializeColor()
    // console.log(color)
    let queue = new Queue() // 保存点的队列
    let neighbores // 相邻的点
    let d = [] // 每个点到这个点的距离
    let pred = [] // 前溯点
    queue.enqueue(v)
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      d[this.vertices[i]] = 0
      pred[this.vertices[i]] = null
    }
    while (!queue.isEmpty()) {
      let u = queue.dequeue()
      neighbores = this.adjList.get(u)
      color[u] = 'grey'
      for (let i = 0, iLen = neighbores.length; i < iLen; i++) {
        let w = neighbores[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
      if (callback) {
        callback(u)
      }
    }
    return {
      distance: d,
      predecessors: pred
    }
  }
  // 最短路径
  shortestPath (v, u) { // 从v到u的最短路径
    let pathData = this.bfs(v)
    let pathSortestRe = new Stack()
    for (let toVertex = u; toVertex !== v; toVertex = pathData.predecessors[toVertex]) {
      pathSortestRe.push(toVertex)
    }
    pathSortestRe.push(v)
    let pathSortest = []
    while (!pathSortestRe.isEmpty()) {
      pathSortest.push(pathSortestRe.pop())
    }
    return pathSortest
  }
  dfs (v, callback) {
    let color = this.initializeColor()
    // this.dfsVisit(v, color, callback)
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      if (color[this.vertices[i]] === 'white') {
        this.dfsVisit(this.vertices[i], color, callback)
      }
    }
  }
  dfsVisit (v, color, callback) {
    color[v] = 'grey'
    if (callback) {
      callback(v)
    }
    let neighbores = this.adjList.get(v)
    for (let i = 0, iLen = neighbores.length; i < iLen; i++) {
      if (color[neighbores[i]] === 'white') {
        this.dfsVisit(neighbores[i], color, callback)
      }
    }
    color[v] = 'black'
  }
  DFS (v, callback) {
    console.log('DFS')
    let color = this.initializeColor()
    let d = []
    let f = []
    let p = []
    let time = 0
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      d[this.vertices] = 0
      f[this.vertices] = 0
      p[this.vertices] = null
    }
    for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
      if (color[this.vertices[i]] === 'white') {
        this.DFSVisit(this.vertices[i], color, time, d, f, p)
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p
    }
  }
  DFSVisit (v, color, time, d, f, p) {
    color[v] = 'grey'
    d[v] = ++time
    let neighbores = this.adjList.get(v)
    for (let i = 0, iLen = neighbores.length; i < iLen; i++) {
      if (color[neighbores[i]] === 'white') {
        color[neighbores[i]] = 'grey'
        this.DFSVisit(neighbores[i], color, time, d, f, p)
      }
    }
    color[v] = 'black'
    f[v] = ++time
    console.log('explored ' + v)
  }
}
export {Stack, Queue, PriorityQueue, LinkedList, DoubleLinkedList, unionSet, insersection, containSet, diffSet, HasHTable, HashMap, BinarySearchTree, Graph}
