let binaryArray = [];

for (let i = 0; i < binaryArray.length; i+=2) {
  console.log(i*1 + 0);
  console.log(i*1 + 1);
}

class Heap {
  constructor() {
    this.arr = [];
  }
  
  insert(value) {
    this.arr.push(value);
    console.log(this.arr);
  }
};

let arrHeap = new Heap();
arrHeap.insert(5);
console.log(arrHeap);
