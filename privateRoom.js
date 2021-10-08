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
  
  static #showRoom() {
    return ("width: " + this.width + " height: " + this.height);
  }

  static printRoom() {
    console.log(this.#showRoom());
  }
}

let level = new Room(5, 5, "red");
level.showDoor();
level.printRoom();
