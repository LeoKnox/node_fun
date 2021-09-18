class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
};

class Tree {
  constructor() {
    this.head = null;
  }
  
  insert(data) {
    var newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      console.log("head added");
    } else {
      console.log("insert that node!")
      this.add_node(this.head, newNode)
    };
  }
  
  add_node(pointer, thisNode) {
    pointer.left = thisNode;
    console.log("node added");
    console.log(pointer);
  }
};

const new_tree = new Tree();
new_tree.insert(5);
new_tree.insert(7);
//console.log(new_tree.head);
console.log("more good stuff");
console.log(new_tree.head.left);
