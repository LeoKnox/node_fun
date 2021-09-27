let one = [6,1,4,3];

function mergeArr(aArr, bArr) {
  console.log("Start");
  newArr = [];
  a = 0;
  b = 0;
  while((a < aArr.length) && (b < bArr.length)){
    if (aArr[a] < bArr[b]) {
      newArr.push(aArr[a]);
      a++;
      console.log("9"+newArr);
    } else {
      newArr.push(bArr[b]);
      b++;
      console.log("0"+newArr);
    }
  }
  console.log ("merge"+newArr);
  return(newArr);
}

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
    newArr = mergeArr(x, y);
    console.log("3"+mArr);
    return(newArr);
  }
  console.log(mArr);
}

console.log(mergeSort(one, 0, one.length));
