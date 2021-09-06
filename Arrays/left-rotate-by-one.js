const leftRotate = function (array) {
  let temp = array[0]
  let i
  for (i = 1; i < array.length; i++) {
    array[i - 1] = array[i]
  }
  array[i] = temp
  return array
}

array = [2, 6, 9, 5, 6, 0]
console.log(leftRotate(array))