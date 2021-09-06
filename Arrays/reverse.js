// Write a program to reverse an array

const reverse = function (array) {
  let low = 0
  let high = array.length - 1
  while (low < high) {
    let temp = array[low]
    array[low] = array[high]
    array[high] = temp
    low++
    high--
  }
  return array
}

array = [1, 2, 3, 4, 5]
console.log(reverse(array))