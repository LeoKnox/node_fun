class timex{
  constructor(data, time) {
    this.data = data;
    this.time = 120 - time;
  }
  
  
}

let newTimex = new timex("list", 0);
console.log(newTimex);
