/*
数组排序算法
*/

class ArrayList {
  constructor () {
    this.array = []
  }
  insert (item) {
    this.array.push(item)
  }
  toString () {
    return this.array.join('')
  }
  // 冒泡
  bubbleSort (bool = true) { // bool true 升序 false 降序
    for (let i = 0, iLen = this.array.length; i < iLen; i++) {
      for (let j = 0, jLen = this.array.length - 1 - i; j < jLen; j++) {
        if (bool) {
          if (this.array[j] > this.array[j + 1]) {
            [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]]
          }
        } else {
          if (this.array[j] < this.array[j + 1]) {
            [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]]
          }
        }
      }
    }
    return this.array
  }
  // 选择
  selectSort (bool = true) {
    for (let i = 0, iLen = this.array.length; i < iLen; i++) {
      let indexMin = i
      for (let j = i + 1; j < iLen; j++) {
        if (bool) {
          if (this.array[indexMin] < this.array[j]) {
            [this.array[indexMin], this.array[j]] = [this.array[j], this.array[indexMin]]
          }
        } else {
          if (this.array[indexMin] > this.array[j]) {
            [this.array[indexMin], this.array[j]] = [this.array[j], this.array[indexMin]]
          }
        }
      }
    }
    return this.array
  }
  // 插入排序
  insertionSort (bool = true) {
    let length = this.array.length
    let j
    let temp
    for (let i = 1; i < length; i++) {
      j = i
      temp = this.array[i]
      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1]
        j--
      }
      this.array[j] = temp
    }
  }
  // 归并
  mergeSort (array) {
    let length = array.length
    if (length === 1) {
      return array
    }
    let mid = Math.floor(length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid, length)
    return this.merge(this.mergeSort(left), this.mergeSort(right))
  }
  merge (left, right) {
    let result = []
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    while (left.length > 0) {
      result.push(left.shift())
    }
    while (right.length > 0) {
      result.push(right.shift())
    }
    return result
  }
  // 快速
  quickSort (arr, left, right) {
    let index
    if (arr.length > 1) {
      index = this.partition(arr, 0, arr.length - 1)
      console.log(index)
      if (left < index - 1) {
        this.quickSort(arr, left, index - 1)
      }
      if (index < right) {
        this.quickSort(arr, index, right)
      }
    }
  }
  partition (arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)]
    let i = left
    let j = right
    while (i <= j) {
      while (arr[i] < pivot) {
        i++
      }
      while (pivot < arr[j]) {
        j--
      }
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
      }
    }
    return i
  }
  // 堆
  // 计数
  // 桶
  // 基数
}
export {ArrayList}
