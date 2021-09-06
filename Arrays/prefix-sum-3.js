// Given N ranges, find the maximum appearing element in the ranges

function maxOcc(l, r, n) {
    let a = new Array(1000)
    a = a.fill(0)
    for (let i = 0; i < n; i++) {
        a[l[i]]++
        a[r[i] + 1]--
    }
    for (let j = 1; j < 1000; j++) {
        a[j] += a[j-1]
    }
    
    let pos = 0
    let max = a[pos]
    for (let k = 0; k < 1000; k++) {
        if (a[k] > max) {
            pos = k
            max = a[pos]
        }
    }
    return pos
}

left = [1,2,3]
right = [3,5,7]
console.log(maxOcc(left, right, 3))