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
    let p = this.arr.length - 1;
    //console.log(p);
    let previous = Math.ceil(p/2);
    console.log(previous);
    while (p >= 0) {
      console.log("loop 1" + this.arr[p] + " " + this.arr[previous]);
      if (this.arr[p] < this.arr[previous]) {
        let temp = this.arr[p];
        this.arr[p] = this.arr[previous];
        this.arr[previous] = temp;
      }
    }
    //if (this.arr[p])
  }
};

let arrHeap = new Heap();
arrHeap.insert(5);
arrHeap.insert(2);
arrHeap.insert(6);
arrHeap.insert(3);
console.log(arrHeap);
console.log(Math.ceil(.5/1));
