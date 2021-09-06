// In this solution we find the max profit in Stock Buy and Sell Problem.

const maxProfit = function(a) {
    let profit = 0
    for (let i = 1; i < a.length; i++) {
        if (a[i] > a[i - 1])
            profit += a[i] - a[i - 1]
    }
    return profit
}

prices = [1, 5, 3, 8, 12]
console.log(maxProfit(prices))