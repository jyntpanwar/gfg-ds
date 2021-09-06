// Equilibrium point
function findEq(a) {
    let totalSum = 0
    for (let i = 0; i < a.length; i++)
        totalSum += a[i]
    let leftSum = 0
    for (let i = 0; i < a.length; i++) {
        if (leftSum == totalSum - a[i]) {
            return true
        }
        leftSum += a[i]
        totalSum -= a[i]
    }
    return false
}

list = [3,4,8,-9,20,6]
console.log(findEq(list))
