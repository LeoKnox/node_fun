class timex{
  constructor(data, time) {
    this.data = data;
    this.time = 120 - time;
  }
  
  
}

let newList = [];
let newTimex = new timex("list", 0);
newList.push(newTimex);
while(newTimex[0] > 0) {
  if (newString = true) {
    newList.push(new timex("string", newTimex[0].time));
    newTimex -= 1;
  } else {
    newTimex -= 1;
  }
}

console.log(newList);
