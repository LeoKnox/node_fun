let roman = "DCCLXXXIX";
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
      i++;
    } else {
      total += 10;
    }
  }
  if (roman.charAt(i) == "V") {
    total += 5;
  }
  if (roman.charAt(i) == "I") {
    if (roman.charAt(i+1) == "X") {
      total += 9
      i++;
    } else {
      total += 1;
    }
  }
  console.log(total);
}
