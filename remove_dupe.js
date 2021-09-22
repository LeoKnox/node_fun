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
          if (start != 0) {
            start = j;
          }
          stop = j;
          del_word = del_word + s[i];
        } else if (del_word == key_word) {
          s.slice(start, stop);
          del_word = "";
        }
      }
      key_word = "";
    }
  }
  for (var x=0; x < s.length; x++) {
    console.log(s[x]);
  }
}
