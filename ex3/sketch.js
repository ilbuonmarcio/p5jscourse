var xSpeedSlider;

class Drop {
  constructor(radius, x, y, yspeed, color){
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.yspeed = yspeed;
    this.color = color;
  }

  move(value){
    this.xspeed = value;
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
  xSpeedSlider = createSlider(-7, 7, 2);
  xSpeedSlider.position(20, 20);
  drops = new Array();
  num_of_drops = 150;

  color = [
    120, 120, 255
  ];

  for (var i = 0; i < num_of_drops; i++){
    drops.push(
      new Drop(
        random()*4,
        random()*width,
        random()*height,
        random(2, 3),
        color
      )
    );
  }
}

function draw() {
  background(20, 20, 100, 200);
  for(drop of drops){
    drop.move(xSpeedSlider.value());
    stroke(drop.color)
    ellipse(drop.x, drop.y, drop.radius);
  }
}
