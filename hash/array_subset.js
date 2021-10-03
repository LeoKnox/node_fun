let grapeArr = [5, 3, 1, 4];
let plumArr = [1, 4, 9];
let newDict = {};

for (let i = 0; i < grapeArr.length; i++) {
  newDict[grapeArr[i]] = grapeArr[i];
}

console.log(newDict);
