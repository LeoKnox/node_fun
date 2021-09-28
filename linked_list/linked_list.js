class Node {
  constructor (value) {
    console.log("node construct");
    this.value = this.value;
    this.next = null;
  }
}

class Link {
  constructor() {
    console.log("link construct");
    this.head = null;
  }
  
  add(value) {
    console.log(value);
    var newLink = new Node(value);
    this.head = newLink;
  }
}

ll = new Link();
ll.add('blue');
console.log(ll.head);
