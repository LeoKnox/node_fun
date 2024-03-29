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
      this.tail.next = newNode;
      this.tail = this.tail.next;
      
    }
  }
  
  dequeue() {
    if (this.head == null) {
      console.log("Q is Empty");
    } else {
      let value = this.head.value;
      this.head = this.head.next;
    }
    return(value);
  }
  
  print() {
    let runner = this.head;
    if (this.head == null) {
      console.log("Empty");
    } else {
      while (runner != null) {
        console.log(runner.value);
        runner = runner.next;
      }
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
myQ.print();
myQ.add(3);
myQ.add(9);
myQ.print();
console.log(myQ.dequeue());
console.log(myQ);
console.log("____");
myQ.dequeue()
console.log(myQ);
myQ.dequeue()
console.log(myQ);
myQ.dequeue()
console.log(myQ);
myQ.dequeue();
console.log(myQ);
myQ.print();
