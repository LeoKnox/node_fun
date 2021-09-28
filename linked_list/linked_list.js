class Node {
  constructor (value) {
    this.value = this.value;
    this.next = null;
  }
}

class Link {
  constructor() {
    this.head = null;
  }
  
  add(value) {
    var newLink = new Node(value);
    this.head = newLink;
  }
}

ll = new Link();
ll.add('blue');
console.log(ll.head);
