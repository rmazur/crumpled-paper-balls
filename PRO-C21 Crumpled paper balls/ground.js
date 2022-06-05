const Bodies = Matter.Bodies;
const World = Matter.World;

let groundplane;

var groundbase_options = {
  isStatic: true,
  render: { fillStyle: '#FFFF00' }
};

class ground {
  constructor(x, y, width, height) {
    this.x = x,
      this.y = y,
      this.width = width,
      this.height = height
  }


  display() {

    groundplane = Bodies.rectangle(this.x, this.y, this.width, this.height, groundbase_options);
    World.add(world, groundplane);

    rect(this.x, this.y, this.width, this.height);

  }
}