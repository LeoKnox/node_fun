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
    console.log(p);
    let previous = Math.ceil(p/2);
    console.log(previous);
    console.log(p);
    let i = 0;
    do {
      let previous = Math.ceil(p/2);
      console.log("loop " + this.arr[p] + " " + this.arr[previous] + " " + p);
      console.log(this.arr);
      if (this.arr[p] < this.arr[previous]) {
        console.log("swap");
        let temp = this.arr[p];
        this.arr[p] = this.arr[previous];
        this.arr[previous] = temp;
      }
      console.log(this.arr);
      p = Math.floor(p/2)-1;
      i++;
    } while ((p >= 0) && (i < 5));
    //if (this.arr[p])
  }
};

let arrHeap = new Heap();
arrHeap.insert(5);
arrHeap.insert(2);
arrHeap.insert(6);
arrHeap.insert(3);
arrHeap.insert(7);
arrHeap.insert(4);
console.log(arrHeap);
console.log("T" + Math.ceil(1/2));
