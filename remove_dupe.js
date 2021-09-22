function removeDuplicateWords (s) {
  // your perfect code...
  // store first in array
  // run through array until dupe is found
  // delete dupe
  key_word = "";
  del_word = "";
  start = 0;
  stop = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      key_word = key_word + s[i];
    } else {
      console.log(key_word);
      for (var j = i; j < s.length; j++) {
        if (s[j] != " ") {
          start++;
          stop++;
          del_word = del_word + s[j];
        } else if (del_word === key_word) {
          console.log("word and word" + start + ":" + stop);
          console.log(s);
          s = s.substring(1, 5);
          console.log(s);
          del_word = "";
          stop = 0;
          start++;
        } else {
          del_word = "";
          stop = 0;
          start++;
        }
        console.log(del_word + ": key :" + key_word);
      }
      key_word = "";
    }
  }
  for (var x=0; x < s.length; x++) {
    console.log(s[x]);
  }
}


let s = "one two three one three four two";
removeDuplicateWords (s);
