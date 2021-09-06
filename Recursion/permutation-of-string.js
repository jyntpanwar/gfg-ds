const permutations = function (word, start, end) {
    if (start == end) {
        console.log(word)
        return
    }
    for (let i = start; i <= end; i++) {
        word = swap(word, start, i)
        permutations(word, start + 1, end)
        word = swap(word, start, i)
    }
}

const swap = function (word, i, j) {
    const wordArray = word.split('')
    const temp = wordArray[i]
    wordArray[i] = wordArray[j]
    wordArray[j] = temp
    return wordArray.join('')
}

permutations('ABC', 0, 2)