let one = [6,1,4,3];

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
    x=mArr.slice(0, mArr.length/2);
    y=mArr.slice(mArr.length/2, mArr.length);
    console.log(y + "!");
    newArr = mergeSort(x);
    console.log()
    newArr+= mergeSort(y);
    console.log("3"+mArr);
    return(newArr);
  }
  console.log(mArr);
}

console.log(mergeSort(one, 0, one.length));
