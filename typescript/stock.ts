const stocks = [5, 4, 7, 1, 3, 9, 3, 6];

let maxProfit = 0;
let buy = stocks[0];
let sell = 0;

for (let idx = 1; idx < stocks.length; idx++) {
  sell = stocks[idx];

  let profit = sell - buy;
  if (profit > 0) {
    maxProfit = Math.max(profit, maxProfit);
  } else {
    buy = sell;
  }
}
console.log(maxProfit);
