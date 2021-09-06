// This solution uses reversal algorithm

const reverse = function (array, low, high) {
  while(low < high) {
    let temp = array[low]
    array[low] = array[high]
    array[high] = temp
    low++
    high--
  }  
}

const leftRotate = function (array, d) {
  reverse(array, 0, d - 1)
  reverse(array, d, array.length - 1)
  reverse(array, 0, array.length - 1)
}

let array = [5, 4, 8, 9, 3, 2, 1]
leftRotate(array, 2)
console.log(array)
