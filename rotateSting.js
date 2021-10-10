// take string and convert to array
// loop to value
// pop and push  through array
// convert array back to string

class stringFun {
  constructor(newString) {
    this.newString = newString;
  }
  rotateString(value) {
    let newArray = this.newString.split("");
    for (let i = 0; i < value; i++) {
      let rotateChar = newArray.shift();
      newArray.push(rotateChar);
    }
    console.log(newArray.join(""));
  }
}


let roString = new stringFun("scare");
roString.rotateString(1);
