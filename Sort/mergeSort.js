let one = [6,1,4,3];

function mergeArr(aArr, bArr) {
  console.log("Start");
  newArr = [];
  a = 0;
  b = 0;
  console.log("a:"+aArr.length);
  console.log("b:"+bArr.length);
  while((a < aArr.length) && (b < bArr.length)){
    console.log("start while");
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
    return mArr;
  } else if (mArr.length < 3) {
    return mArr;
  } else {
    x=mArr.slice(0, mArr.length/2);
    y=mArr.slice(mArr.length/2, mArr.length);
    console.log("x:"+x);
    console.log("y:"+y);
    newArr = mergeSort(x);
    newArr+= mergeSort(y);
    newArr = mergeArr(x, y);
    return(newArr);
  }
}

console.log(mergeSort(one, 0, one.length));
