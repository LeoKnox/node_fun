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
    if (this.arr.length == 0) {
      this.arr.push(value);
    } else {
      let p = 0;
      while (p < this.arr.length) {
        if (this.arr[2p] > this.arr[2p+1]) {
          p = 2p;
        } else {
          p = 2p+1;
        }
        if (this.arr[0] > value) {
          let temp = this.arr[0];
          this.arr[0] = value;
          this.arr.push(temp);
        } else {
          this.arr.push(value);
          break;
        }
        p++;
      }
      console.log(p);
    }
  }
};

let arrHeap = new Heap();
arrHeap.insert(5);
arrHeap.insert(2);
arrHeap.insert(6);
arrHeap.insert(7);
console.log(arrHeap);
