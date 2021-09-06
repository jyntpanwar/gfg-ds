const countSubsets = function (arr, length, sum) {
    if (length == 0)
        return (sum == 0) ? 1 : 0
    return countSubsets(arr, length - 1, sum)
        + countSubsets(arr, length - 1, sum - arr[length - 1])
}

console.log(countSubsets([10, 20, 15], 3, 25))