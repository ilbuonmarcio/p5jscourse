class Circle {
  constructor(radius, x, y, xspeed, yspeed, color){
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.color = color;
  }

  hits(circle){
    return sqrt(pow(this.x - circle.x, 2) + pow(this.y - circle.y, 2)) < this.radius + circle.radius;
  }

  move(){
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width) this.x = 0;
    if (this.y > height) this.y = 0;
  }
}

var circles;
var num_of_circles;

function setup() {
  createCanvas(300, 300);
  circles = new Array();
  num_of_circles = 125;
  for (var i = 0; i < num_of_circles; i++){
    var color = [random()*255, random()*255, random()*255];
    circles.push(new Circle(random()*25, random()*width, random()*height, random()*4, random()*3, color));
  }
}

function draw() {
  // background(175);
  stroke(100);
  for(var i = 0; i < num_of_circles; i++) {
    for(var j = 0; j < num_of_circles; j++) {
      if(circles[i].hits(circles[j]) && circles[i] !== circles[j]){
        circles[i].move();
      }
    }
    fill(circles[i].color);
    ellipse(circles[i].x, circles[i].y, circles[i].radius);
  }
}
