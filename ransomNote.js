// create a dictionary of arrays.
// add word to dictionary with number of occurences as array
// evaluate the dictionary decrementing or deleting matches
// return true if words are available

let words = ['one', 'two', 'three'];
let phrase = ['two', 'three'];
let wordsAvail = {};

for (let i = 0; i < words.length; i++) {
  wordsAvail[words[i]] = [words[i], 0];
}

for (let j = 0; j < phrase.length; j++) {
  if (wordsAvail.hasOwnProperty(phrase[j])) {
    if (wordsAvail[phrase[j]][1] == 0) {
      delete wordsAvail[phrase[j]];
    } else {
      wordsAvail[phrase[j]][1]--;
    }
  }
}
console.log(wordsAvail);