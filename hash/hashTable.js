class hashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 4;
  }
  
  calculateHash(key) {
    console.log('HI');
    return key.toString().length % this.size;
  }
}

var ht = new hashTable();
console.log(ht.calculateHash("starts"));
