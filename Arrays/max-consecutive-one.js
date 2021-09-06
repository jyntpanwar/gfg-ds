const maxOnes = function (array) {
    let max = 0
    let m = 0
    for (let i = 0; i < array.length; i++) {
        m = array[i] == 1 ? m + 1 : 0
        max = Math.max(max, m)
    }
    return max
}

array = [0, 1, 1, 0, 1, 1, 1]
console.log(maxOnes(array))