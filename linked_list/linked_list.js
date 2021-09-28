class Node {
  constructor (value) {
    console.log("node construct");
    this.value = value;
    this.next = null;
  }
}

class Link {
  constructor() {
    console.log("link construct");
    this.head = null;
  }
  
  add(value) {
    //console.log(value);
    if (this.head == null) {
      var newLink = new Node(value);
      this.head = newLink;
    } else {
      console.log("loop node");
      let i = 1000;
      let runner = this.head;
      while ((runner.next != null) && (i > 0)) {
        i--;
        console.log(runner);
        runner = runner.next;
      }
      var newLink = new Node(value);
      runner.next = newLink;
    }
  }
}

ll = new Link();
console.log(ll);
ll.add("blue");
ll.add("green");
ll.add("orange");
console.log(ll);
