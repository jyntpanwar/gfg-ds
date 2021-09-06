// Maximum Difference problem is to find the maximum of arr[j] - arr[i] where j>i.

const maxDiff = function (array) {
    let min = array[0]
    let result = array[1] - array[0]
    for (let i = 1; i < array.length; i++) {
        result = Math.max(result, array[i] - min)
        min = Math.min(min, array[i])
    }
    return result
  }
  
  array = [2, 3, 10, 6, 4, 8, 1]
  console.log(maxDiff(array))  