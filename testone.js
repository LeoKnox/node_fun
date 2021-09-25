let one = "one two";
let two = "done first work";

for (let i = 0; i < one.length; i++) {
  for (let j = 0; j < two.length; j++) {
    if (one[i] === two[j]) {
      console.log("one");
    }
  }
}
