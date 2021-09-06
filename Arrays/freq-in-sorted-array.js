const freq = function(array) {
    let count = 1
    let currentElement = array[0]
    for (let i = 1; i < array.length; i++) {
        if (currentElement != array[i]) {
            console.log(currentElement + ' -> '+ count)
            currentElement = array[i]
            count = 1
        } else {
            count++
        }
    }
    console.log(currentElement + ' -> '+ count)
}

array = [10, 10, 10, 23, 30, 30, 40]
//array = [40, 50, 50, 50]
freq(array)