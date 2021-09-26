let one = [3,1,4,6,5,9,11];

function mergeSort(mArr, x, y) {
  let newArr = [];
  if ((mArr.length < 3) && (mArr[1] < mArr[0])) {
    let temp = mArr[1];
    mArr[1] = mArr[0];
    mArr[0] = temp;
    return mArr;
  } else if (mArr.length < 3) {
    return mArr;
  } else {
    console.log("3rd else");
    newArr += mergeSort(mArr.splice(0, mArr.length/2));
    newArr += mergeSort(mArr.splice(mArr.length/2+1, mArr.length));
    return(mArr);
  }
  console.log(mArr);
}

console.log(mergeSort(one, 0, one.length));
