let one = [1,3,4,6];

function mergeSort(mArr, x, y) {
  let newArr = [];
  if ((mArr.length < 3) && (mArr[1] < mArr[0])) {
    let temp = mArr[1];
    mArr[1] = mArr[0];
    mArr[0] = temp;
    console.log(mArr);
    return mArr;
  } else if (mArr.length < 3) {
    console.log("2"+mArr);
    return mArr;
  } else {
    console.log("3rd else");
    console.log("x"+mArr.slice(0, mArr.length/2));
    newArr = mergeSort(mArr.slice(0, mArr.length/2));
    newArr.concat(mergeSort(mArr.slice(mArr.length/2+1, mArr.length)));
    console.log("3"+mArr);
    return(newArr);
  }
  console.log(mArr);
}

console.log(mergeSort(one, 0, one.length));
