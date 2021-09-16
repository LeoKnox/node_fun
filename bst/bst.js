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
    let new_node = Node(data);
    if (this.head == null) {
      this.head = data;
    } else {
      add_node(this.head, this.new_node);
    };
  }
};

const new_tree = new Tree();
Tree.insert(5);
console.log(new_tree.head);
