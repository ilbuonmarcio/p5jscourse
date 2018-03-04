/*
Exercise 3: Snow simulator

This is a simple sketch that simulates snow.
Easy, right?

License: MIT

Authors: Alberto Venturi, Damiano Visentini, Alessandro Marchioro
*/

var xSpeedSlider;


/*
This is a class that represent's each snow drop
*/
class Drop {

  // Class's constructor
  constructor(radius, x, y, yspeed, color){
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.yspeed = yspeed;
    this.color = color;
  }

  // Class method move, called at each frame
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

  // We create a drop array
  drops = new Array();
  num_of_drops = 150;

  color = [
    120, 120, 255
  ];

  // We fill the array with random generated drops
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
  background(20, 20, 100, 200); // Clear the framebuffer

  // JavaScript ES6 loop
  for(drop of drops){
    drop.move(xSpeedSlider.value()); // Move the drop by slider's current value
    stroke(drop.color) // Set draw mode "stroke" to draw drop's border depending on drop's instance color
    ellipse(drop.x, drop.y, drop.radius); // Draw an ellipse at x = param1, y = param2, r = param3
  }
}
