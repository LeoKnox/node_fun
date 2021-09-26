let one = [3,1];

function mergeSort(mArr, x, y) {
  if ((mArr.length < 3) && (mArr[1] < mArr[0])) {
    let temp = mArr[1];
    mArr[1] = mArr[0];
    mArr[0] = temp;
    return mArr;
  } else if (mArr.length < 3) {
    return mArr;
  } else {
    console.log("3rd else");
  }
  console.log(mArr);
}

console.log(mergeSort(one, 0, one.length));
