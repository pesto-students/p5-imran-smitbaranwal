function buySellStock(prices) {
  console.log("Provided prices : ", prices);
  let minprice = 10 ^ 5;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }
  console.log("Maximum profit that can be made");
  return maxprofit;
}

let price = [7, 1, 5, 3, 6, 4];
console.log(buySellStock(price));

let price1 = [10, 15, 16, 13, 6, 14, 19];
console.log(buySellStock(price1));

// ? Time complexity is O(n)
// ? Space complexity is O(1)
