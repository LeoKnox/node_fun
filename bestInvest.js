let tS = "aab";
let curChar = tS[0];
let curTotal = 1;
let oA = "";

for (let i = 1; i < tS.length; i++) {
  if (curChar == tS.charAt(i)) {
    curTotal += 1;
  } else {
    oA.push += curChar;
    curChar = tS.charAt(i);
    curTotal = 0;
  }
  console.log(tS.charAt(i));
}

console.log(oA);
