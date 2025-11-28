const prices = [7,1,5,3,6,4]
const maxProfit = (prices) => {
    let profit = 0;

    prices.forEach((price, day) => {
        if (price > prices[day - 1]) {
            profit += price - prices[day - 1];
        }
    });

    return profit;
}

const result = maxProfit(prices)
console.log('result is', result)