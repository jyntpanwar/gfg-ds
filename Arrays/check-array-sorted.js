const isSorted = function (array) {
    prev = array[0]
    return !array.find(element => {
        if (prev > element) {
            return prev
        }
        prev = element
    });
}

array = [1, 2, 3, 4, 10, -5]
console.log(isSorted(array))