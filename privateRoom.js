class Room {
  #door
  
  constructor(height, width, door) {
    this.height = height;
    this.width = width;
    this.#door = door;
  }
  
  showDoor() {
    console.log(this.#door);
  }
}

let level = new Room(5, 5, "red");
level.showDoor();
