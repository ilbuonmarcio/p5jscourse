class Ball{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  moveX(dx){
    this.x += dx;
    this.keepUnderScreen();
  }

  moveY(dy){
    this.y += dy;
    this.keepUnderScreen();
  }

  keepUnderScreen(){
    if(this.x < 0) this.x = 0;
    if(this.x > width) this.x = width;
    if(this.y < 0) this.y = 0;
    if(this.y > height) this.y = height;

  }

  draw(){
    ellipse(this.x, this.y, width/16, height/16);
  }
}

let ball;

function setup(){
  createCanvas(250, 250);
  ball = new Ball(width/2, height/2);
  background(33);
  fill(255);
  stroke(200);
}

function draw(){
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
