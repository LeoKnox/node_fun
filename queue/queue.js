class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  add(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
}

class Node {
   constructor (value) {
     this.value = value;
     this.next = null;
   }
}

let myQ = new Queue();
myQ.add(5);
myQ.add(7);
console.log(myQ);
