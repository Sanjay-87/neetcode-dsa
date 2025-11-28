const prices = [7,1,5,3,6,4];

var maxProfit = function(prices) {
    let buy = Infinity;
    let profit = 0;

    prices.forEach(price => {
        buy = Math.min(buy, price);
        profit = Math.max(profit, price - buy);
    })

    return profit;
}