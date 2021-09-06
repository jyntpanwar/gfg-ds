const removeDuplicates = function(array) {
  let res = 0
  for (let i = 1; i < array.length; i++) {
    if (array[res] != array[i]) {
      array[++res] = array[i]
    }
  }
  return array
}

array = [10, 20, 20, 20, 30, 30]
console.log(removeDuplicates(array))