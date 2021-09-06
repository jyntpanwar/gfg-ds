const maxSumSubArray = function(a) {
    let max = a[0]
    let result = a[0]
    for (let i = 1; i < a.length; i++) {
        max = Math.max(max + a[i], a[i])
        result = Math.max(max, result)
    }
    return result
}

list = [-5, 1, -2, 3, -1, 2, -2]
console.log(maxSumSubArray(list))