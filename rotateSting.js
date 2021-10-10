// take string and convert to array
// loop to value
// pop and push  through array
// convert array back to string

function rotateString(newString, value) {
  let newArray = newString.split("");
  let rotateChar = newArray.shift();
  newArray.push(rotateChar);
  console.log(rotateChar + ":" + newArray);
}

rotateString("scare", 1);
