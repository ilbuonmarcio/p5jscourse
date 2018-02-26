class Drop {
  constructor(radius, x, y, xspeed, yspeed, color){
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.color = color;
  }

  move(){
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
  }
}

var drops;
var num_of_drops;
var color;

function setup() {
  createCanvas(600, 600);
  drops = new Array();
  num_of_drops = 35;

  color = [
    120, 120, 255
  ];

  for (var i = 0; i < num_of_drops; i++){
    drops.push(
      new Drop(
        random()*3,
        random()*width,
        random()*height,
        random()*0.05,
        random(0.3, 0.5),
        color
      )
    );
  }
}

function draw() {
  background(20, 20, 100);
  for(var i = 0; i < num_of_drops; i++) {
    for(var j = 0; j < num_of_drops; j++) {
      drops[i].move();
      stroke(drops[i].color)
      ellipse(drops[i].x, drops[i].y, drops[i].radius);
    }
  }
}
