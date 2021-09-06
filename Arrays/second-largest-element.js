const findSecondLargest = function (array) {
    firstLargest = array[0]
    secondLargest = null

    array.forEach(element => {
        if (element > firstLargest) {
            secondLargest = firstLargest
            firstLargest = element
        } else if (element < firstLargest && secondLargest == null) {
            secondLargest = element                        
        } else if (element < firstLargest && element > secondLargest) {
            secondLargest = element
        }
    });
    return secondLargest    
}

list = [3, 7, 8, 10, 0, 9, 11, 16, 35, 1]
console.log(findSecondLargest(list))