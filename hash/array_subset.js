let grapeArr = [5, 3, 1, 4];
let plumArr = [1, 4, 9];
let newDict = {};

for (let i = 0; i < grapeArr.length; i++) {
  newDict[grapeArr[i]] = grapeArr[i];
}

for (let j = 0; j < plumArr.length; j++) {
  if (Object.keys(grapeArr[plumArr[j]])) {
    console.log("false");
  }
  console.log(grapeArr[j]);
}

console.log(newDict);
