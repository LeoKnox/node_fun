let grapeArr = [5, 3, 10, 9, 2, 4, 8, 4];
let sum = 0;

for (let i = 0; i < grapeArr.length; i = i + 2) {
  sum += grapeArr[i];
}

console.log(sum);
