let roman = "LXVI";
let total = 0;

for (var i = 0; i < roman.length; i++) {
  if (roman.charAt(i) == "L") {
    if (roman.charAt(i+1) == "X") {
      total += 50;
    }
  }
  if (roman.charAt(i) == "X") {
    if (roman.charAt(i+1) == "L") {
      total += 40;
    } else if (roman.charAt(i+1) == "I") {
      total += 9;
    }  else {
      total += 10;
    }
  }
  console.log(total);
}
