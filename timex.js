class timex{
  constructor(data, time) {
    this.data = data;
    this.time = 120 - time;
  }
  
  
}

let newList = [];
let newTimex = new timex("list", 0);
newList.push(newTimex);
newList.push(new timex("string", 5));
console.log(newList);
