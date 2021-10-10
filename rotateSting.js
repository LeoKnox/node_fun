// take string and convert to array
// loop to value
// pop and push  through array
// convert array back to string

function rotateString(newString, value) {
  let newArray = newString.split("");
  for (i = 0; i < value; i++) {
    let rotateChar = newArray.shift();
    newArray.push(rotateChar);
  }
  console.log(newArray.join(""));
}

rotateString("scare", 5);
