let one = "one two";
let two = "done first work";
let stop = true;
let total = 0;

for (let i = 0; i < one.length; i++) {
  for (let j = 0; j < two.length; j++) {
    if (one[i] === two[j]) {
      console.log("one");
      total++;
    } else if  ((total < two.length) && stop) {
      console.log("two");
    }
  }
}
let one = "one two";
let two = "done first work";
let stop = true;
let total = 0;

for (let i = 0; i < one.length; i++) {
  for (let j = 0; j < two.length; j++) {
    if (one[i] === two[j]) {
      console.log("one");
      total++;
    } else if  ((total < two.length) && stop) {
      console.log("two");
    }
  }
}
