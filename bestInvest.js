let tD = [8, 9, 4, 9, 3, 2, 7, 8];
let low = tD[0];
let largest = 0;
let sum = 0;

for (let i = 1; i < tD.length; i++) {
  if (low < tD[i]) {
    sum += tD[i]-low;
    console.log("s " + sum);
    if ((tD[i]-low) > largest) {
      largest = tD[i]-low;
    }
  } else if (low > tD[i]) {
    low = tD[i];
  }
}

console.log("L " + largest);
console.log(sum);
