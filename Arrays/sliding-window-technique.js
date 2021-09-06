// Given an array of integers and a number k, find the maximum sum of K consecutive elements
// The trick here is add the first 0 to k (exclusive) elements.
// Slide the window by one, add the kth element and subtract 0th element
function findMax(a, k) {
    let currSum = 0
    for (let i = 0 ; i < k; i++) {
        currSum += a[i]
    }
    let maxSum = currSum
    for (let i = k; i < a.length; i++) {
        currSum += (a[i] - a[i - k])
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum
}

// Window sliding technique for a subarray sum problem

function findMax2(a, sum) {
    let currSum = a[0]
    let windowSize = 1
    let i = 1
    for (let i = 1; i < a.length; i++) {
        if (currSum < sum) {
            currSum += a[i]
            windowSize++
        } else if (currSum > sum) {
            currSum -= a[i - windowSize]
            windowSize--
            i--
        } else if (currSum == sum) {
            return true
        }
    }
    return false
}

list = [1, 8, 30, -5, 20, 7]
console.log(findMax(list, 3))

list2 = [1,4,20,3,10,5]
console.log(findMax2(list2, 33))