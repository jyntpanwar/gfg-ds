function prefixSum(list) {
    let prefixSumArray = []
    prefixSumArray.push(list[0])
    for (let i = 1; i < list.length; i++) {
        prefixSumArray.push(list[i] + prefixSumArray[i - 1])
    }
    //console.log(prefixSumArray)
    return prefixSumArray
}

function getSum(a, l, r) {
    prefixSumArray = prefixSum(a)
    if (l != 0) {
        return prefixSumArray[r] - prefixSumArray[l - 1]
    } else {
        return prefixSumArray[r]
    }
}

list = [2,8,3,9,6,5,4]
console.log(getSum(list, 0, 2))
console.log(getSum(list, 1, 3))
