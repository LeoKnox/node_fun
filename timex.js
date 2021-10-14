class timex{
  constructor(data, time) {
    this.data = data;
    this.time = 120 - time;
  }
  
  
}

let newList = [];
let newTimex = new timex("list", 0);
newList.push(newTimex);
console.log(newList[0].time);
