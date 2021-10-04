let tS = "aabbbbbbaaacdddd";
let tT = "a2b6a3c1d4";
let curChar = tS[0];
let curTotal = 1;
let jChar = tT[0];
let jTotal = tT[1];
let oA = "";
let oS = "";

for (let j = 2; j <= tT.length; j += 2) {
  oS += jChar.repeat(jTotal);
  jChar = tT[j];
  jTotal = tT[j+1];
}

console.log(oS);

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
