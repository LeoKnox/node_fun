let one = [4,3];

function mergeSort(mArr, x, y) {
  if ((mArr.length < 3) && (mArr[1] < mArr[0])) {;
    let temp = mArr[1];
    mArr[1] = mArr[0];
    mArr[0] = temp;
  }
  console.log(mArr);
}

mergeSort(one, 0, one.length);
