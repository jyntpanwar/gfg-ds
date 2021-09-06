// Given a binary array, we need to find the minimum of number of group flips to make all array elements same.
// In a group flip, we can flip any set of consecutive 1s or 0s.
function printGroups(a, n) {
    a.for
    for (let i = 1; i < n; i++) {
        if (a[i] != a[i-1]) {
            if (a[i] != a[0]) {
                process.stdout.write('From ' + i + ' to ')
            } else {
                console.log(i - 1)
            }
        }
    }
    if (a[n - 1] != a[0])
        console.log(n - 1)
}

list = [0,0,1,1,0,0,1,1,0,1]
printGroups(list, list.length)