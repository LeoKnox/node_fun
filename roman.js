let roman = "LXVI";
let total = 0;

for (var i = 0; i < roman.length; i++) {
  if (roman.charAt(i) == "L") {
    console.log(50);
    if (roman.charAt(i+1) == "X") {
      total += 50;
    }
  }
  if (roman.charAt(i) == "X") {
    console.log(10);
    if (roman.charAt(i+1) == "L") {
      total += 40;
    } else {
      total += 10;
    }
  }
}
