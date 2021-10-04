let tD = [8, 9, 4];
let low = tD[0];
let sum = 0;

for (let i = 1; i < tD.length; i++) {
  console.log("ch " + low);
  if (low < tD[i]) {
    console.log(tD[i]);
    sum += tD[i]-low;
  } else if (low > tD[i]) {
    low = tD[i];
  }
}

console.log(sum);
