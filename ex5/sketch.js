/*
Exercise 5: Draw into buffer

This is a simple sketch that tries to replicate Snake's game functionalities.

License: MIT

Authors: Alberto Venturi, Damiano Visentini, Alessandro Marchioro
*/


/*
This is a class that represent's a snake ball
*/
class Ball{

  // Class's constructor
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  // Class method for moving at X coordinates
  moveX(dx){
    this.x += dx;
    this.keepUnderScreen();
  }

  // Class method for moving at Y coordinates
  moveY(dy){
    this.y += dy;
    this.keepUnderScreen();
  }

  // Class method, called at each physical move, to keep the instance under screen
  keepUnderScreen(){
    if(this.x < 0) this.x = 0;
    if(this.x > width) this.x = width;
    if(this.y < 0) this.y = 0;
    if(this.y > height) this.y = height;

  }

  // Class method for drawing the ball on the surface
  draw(){
    ellipse(this.x, this.y, width/16, height/16);
  }
}

let ball;

function setup(){
  createCanvas(250, 250);

  ball = new Ball(width/2, height/2); // Instanciate a new ball at the center of the screen

  background(33); // Clear framebuffer with 33, 33, 33 RGB color
  fill(255); // Set draw mode "fill" to fill shapes with 255, 255, 255 RGB color
  stroke(200); // Set draw mode "stroke" to stroke shape's borders with 200, 200, 200 RGB color
}

function draw(){
  // if statement for clearing the game in case of clicking ENTER key
  if(keyIsDown(ENTER)){
    background(33);
    ball.x = width/2;
    ball.y = height/2;
  }

  if(keyIsDown(UP_ARROW)){
    ball.moveY(-5);
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.moveY(5);
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.moveX(-5);
  }
  if(keyIsDown(RIGHT_ARROW)){
    ball.moveX(5);
  }

  ball.draw();
}
