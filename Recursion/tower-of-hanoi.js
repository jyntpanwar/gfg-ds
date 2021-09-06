const toi = function (n, a, b, c) {
    if (n ==1) {
        console.log(`Move 1 from ${a} to ${c}`)
        return
    }
    toi(n - 1, a, c, b)
    console.log(`Move ${n} from ${a} to ${c}`)
    toi(n - 1, b, a, c)
}

toi(4, 'a', 'b', 'c')