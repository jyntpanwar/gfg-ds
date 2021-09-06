// Majority element is an element that appears more than n/2 times in an array of size n
//Using Moore's voting algorithm

const findMajority = function (a) {
    // Phase 1 to find the majority element.
    // If a element comes in an array more than n/2 times,
    // then its counter should never be zero
    let me = 0
    let count = 1
    for (let i = 1; i < a.length; i++) {
        if (a[me] == a[i])
            count++
        else count--
        if(count == 0) {
            me = i
            count = 1
        }
    }

    // Phase 2 Verify the majority element

    let total = 0
    for (let j = 0; j < a.length; j++) {
        if(a[me] == a[j])
            total++
    }
    if (total > a.length/2)
        return a[me]
    else return -1
}

list = [8, 7, 6, 8, 6, 6, 6, 6]
console.log(findMajority(list))