// The task is to find maximum circular sum subarray of a given array

// Solution : 
// 1. Find normal max subarray sum
// 2. To find circular subarray sum, subtract minimum subarray sum from the total sum of the array

const normalMaxSum = function (a) {
    let res = a[0]
    let currMax = a[0]
    for (let i = 1; i < a.length; i++) {
        currMax = Math.max(a[i], currMax + a[i])
        res = Math.max(res, currMax)
    }
    return res
}

const overallMaxSum = function (a) {
    let normalMax = normalMaxSum(a)
    if (normalMax < 0) {
        return normalMax
    }
    let sum = 0
    // Here we are inverting the array, instead of the finding the min sum subarray. 
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
        a[i] = a[i] * -1
    }
    let maxCircular = sum + normalMaxSum(a)
    return Math.max(normalMax, maxCircular)
}

list = [8, -4, 3, -5, 4]
console.log(overallMaxSum(list))