let tS = "aabbbbbbaaacdddd";
let curChar = tS[0];
let curTotal = 1;
let oA = "";

for (let i = 1; i < tS.length; i++) {
  if (curChar == tS.charAt(i)) {
    curTotal += 1;
  } else {
    oA += curChar + curTotal;
    curChar = tS.charAt(i);
    curTotal = 1;
  }
  if (i == tS.length - 1) {
    oA += curChar + curTotal;
    curChar = tS.charAt(i);
    curTotal = 1;
  }
}

console.log(oA);
