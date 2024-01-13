/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    if (prices.length == 1) return 0
    let L = prices[0]
    let R = prices[1]
    let max_profit = R - L
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < L) {
            L = prices[i]
            R = prices[i + 1]
            continue

        }
        R = prices[i]
        max_profit = Math.max(max_profit, R - L)
    }
    return max_profit < 0 ? 0 : max_profit

};




