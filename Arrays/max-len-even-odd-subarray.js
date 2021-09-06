// array problem to find the length of the longest subarray that has alternating even odd elements.
const maxEvenOdd = function (a) {
    let max = 1
    let curr = 1
    for (let i = 1; i < a.length; i++) {
        if ((a[i] % 2 == 0 && a[i - 1] % 2 != 0) || (a[i] % 2 != 0 && a[i - 1] % 2 == 0)) {
            curr++
            max = Math.max(curr, max)
        } else {
            curr = 1
        }
    }
    return max
}

list = [5, 10, 20, 6, 3, 8]
console.log(maxEvenOdd(list))