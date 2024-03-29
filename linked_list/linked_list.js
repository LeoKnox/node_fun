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
  
  addPosition(value, position) {
    let cursor = 0;
    if ((this.head == null) && (cursor != position)) {
      console.log("error out of bounds");
    }
    let runner = this.head;
    while ((runner != null) && (cursor != position)) {
      cursor++;
      let newnode = new Node(value);
      newnode.next = runner.next;
      runner.next = newnode;
      runner = runner.next;
    }
    console.log(runner.value);
  }
  
  addFront(value) {
    let runner = this.head;
    let newLink = new Node(value);
    newLink.next = this.head;
    this.head = newLink;
  }
  
  print() {
    if (this.head == null) {
      return true;
    } else {
      let runner = this.head;
      console.log(runner.value);
      while (runner.next != null) {
        runner = runner.next;
        console.log(runner.value);
      }
    }
  }
}

ll = new Link();
console.log(ll);
ll.add("blue");
ll.addPosition("yellow", 1);
ll.addFront("indigo");
ll.add("green");
ll.addPosition("red", 1);
ll.add("orange");
ll.print();
console.log(ll);
