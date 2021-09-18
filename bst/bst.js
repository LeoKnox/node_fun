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
    if (this.head === null) {
      this.head = data;
      console.log("head added");
    } else {
      this.add_node(this.head, data)
    };
  }
  
  add_node(pointer, data) {
    pointer.left = data;
    console.log("node added");
    console.log(data);
  }
};

const new_tree = new Tree();
new_tree.insert(5);
new_tree.insert(7);
console.log(new_tree.head);
console.log("more good stuff");
console.log(new_tree.left);
