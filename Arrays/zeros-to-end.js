const zerosToEnd = function (array) {
  res = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      array[res++] = array[i]
    }
  }

  while(res < array.length) {
    array[res++] = 0
  }

  return array
}

array = [1, 5, 0, 6, 7, 0, 4, 0, 6, 0, 0]

console.log(zerosToEnd(array))