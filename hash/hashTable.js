class hashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }
  
  calculateHash(key) {
    console.log('HI');
    return key.toString().length % this.size;
  }
  
  addHash(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.values[hash][key] = value;
  }
}

var ht = new hashTable();
ht.addHash("One", 8)
