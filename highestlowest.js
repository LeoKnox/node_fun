let prices = [2, 8, 3, 13, 1];
let newLow = newHigh = gain = 0;
let lowest = highest = prices[0];

// loop through prices.
// low/highest prices
// current prices
// if new low price is lower then low price start new comparison.

console.log(lowest + " " + highest + " " + newLow + " " + newHigh);
for (i = 1; i < prices.length; i++) {
  console.log(newLow);
  if ((prices[i] < lowest) && (gain == 0)) {
    lowest = prices[i];
  } else if ((prices[i] > highest) && (gain == 0)) {
    highest = prices[i];
    gain = highest - lowest;
  } else if (prices[i] > highest) {
    highest = prices[i];
  } else if (prices[i] < lowest) {
    if (gain > (newHigh - newLow)) {
      lowest = prices[i];
      newLow = lowest;
      newHigh = highest;
      lowest = 0;
      highest = 0;
      gain = 0;
    } else {
      lowest = prices[i];
    }
  }
}

if (newLow == 0) {
  newLow = lowest;
  newHigh = highest;
}
console.log(newLow + " " + newHigh + " " + (newHigh-newLow));
