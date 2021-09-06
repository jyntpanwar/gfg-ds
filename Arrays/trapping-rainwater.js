const getWater = function(a) {
    let water = 0
    let lmax = [a[0]]
    let rmax = []
    rmax[a.length - 1] = a[a.length - 1]

    for (let i = 1; i < a.length; i++) {
        lmax[i] = Math.max(a[i], lmax[i - 1])
    }
    for (let j = a.length - 2; j >=0; j--) {
        rmax[j] = Math.max(a[j], rmax[j + 1])
    }

    for (let k = 1; k < a.length - 1; k++) {
        water += Math.min(lmax[k], rmax[k]) - a[k]
    }
    return water
}

units = [3, 0, 1, 2, 5]
console.log(getWater(units))