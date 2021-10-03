let grapeArr = [5, 3, 1, 4];
let plumArr = [1, 4, 9];
let newDict = {};

for (let i = 0; i < grapeArr.length; i++) {
  newDict[grapeArr[i]] = grapeArr[i];
}

for (let j = 0; j < plumArr.length; j++) {
  console.log(plumArr[j]);
  if (grapeArr.key === j) {
    console.log("false");
    break;
  }
}

console.log(newDict);
