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
    } else {
      this.add_node(this.head, newNode)
    };
  }
  
  add_node(pointer, thisNode) {
    if ((pointer.data) < (thisNode.data)) {
      if (pointer.right === null){
        pointer.right = thisNode;
      } else {
        this.add_node(pointer.right, thisNode);
      }
    } else if ((pointer.data) > (thisNode.data)) {
      if (pointer.left === null) {
        pointer.left = thisNode;
      } else {
        this.add_node(pointer.left, thisNode);
      }
    }
  }
  
  scan_tree(pointer) {
    if (pointer.left !== null) {
      this.scan_tree(pointer.left);
    }
    console.log(pointer.data);
    if (pointer.right !== null) {
      this.scan_tree(pointer.right);
    }
  }
  
  return_data(pointer) {
    let sum = pointer.data;
    if (pointer.left != null) {
      sum += this.return_data(pointer.left);
    }
    if (pointer.right != null) {
      sum += this.return_data(pointer.right);
    }
    return(sum);
  }
  
  sub_data(pointer, total) {
    total -= pointer.data;
    if ((pointer.left == null) && (pointer.right == null)) {
      console.log("t:"+total);
    }
    if (pointer.left != null) {
      this.sub_data(pointer.left, total);
    }
    if (pointer.right != null) {
      this.sub_data(pointer.right, total);
    }
  }
  
  branch_sum(total) {
    let runner = this.head;
    total -= runner.data;
    this.sub_data(runner.left, total);
    this.sub_data(runner.right, total);
  }
  
  sum_tree() {
    let runner = this.head;
    let sum = runner.data;
    sum += this.return_data(runner.right);
    sum += this.return_data(runner.left);
    console.log(sum);
  }
  
  print_tree() {
    let cur_node = this.head;
    if (cur_node === null) {
      console.log("Emptry Tree");
    } else {
      this.scan_tree(cur_node.left);
      console.log(cur_node.data);
      this.scan_tree(cur_node.right);
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
new_tree.sum_tree();
new_tree.branch_sum(14);
console.log("more good stuff");
//console.log(new_tree.head);
// find sum of first tree
// create sum var
// trace down 
