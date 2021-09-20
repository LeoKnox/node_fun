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
      //console.log("insert that node!")
      this.add_node(this.head, newNode)
    };
  }
  
  add_node(pointer, thisNode) {
    if ((pointer.data) < (thisNode.data)) {
      //console.log("Lesser path taken")
      if (pointer.right === null){
        pointer.right = thisNode;
        //console.log("node added");
      } else {
        this.add_node(pointer.right, thisNode);
      }
    } else if ((pointer.data) > (thisNode.data)) {
      if (pointer.left === null) {
        pointer.left = thisNode;
        //console.log("left node added");
      } else {
        this.add_node(pointer.left, thisNode);
      }
    }
  }
  
  scan_tree(pointer) {
    if ((pointer.left === null) && (pointer.right === null)) {
      return(pointer.data);
    }
    if (pointer.left !== null) {
      console.log(this.scan_tree(pointer.left));
      console.log(pointer.data);
    }
    if (pointer.right !== null) {
      console.log(this.scan_tree(pointer.right));
    }
  }
  
  print_tree() {
    let cur_node = this.head;
    if (cur_node === null) {
      console.log("Emptry Tree");
    } else {
      this.scan_tree(cur_node.left);
      console.log(cur_node.data);
      this.scan_tree(cur_node.right);
      //console.log(cur_node)
    }
  }
};

const new_tree = new Tree();
new_tree.print_tree();
new_tree.insert(5);
new_tree.insert(7);
new_tree.insert(2);
new_tree.insert(3);
new_tree.insert(15);
new_tree.insert(4);
new_tree.insert(1);
new_tree.print_tree();
//console.log(new_tree.head);
console.log("more good stuff");
console.log(new_tree.head);
