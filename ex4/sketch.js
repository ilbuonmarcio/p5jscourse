function setup(){
  createCanvas(500, 500);
  background(50);
  noStroke();
}

function draw(){

}

function mousePressed(){
  if(mouseButton === LEFT){
    fill(255, 0, 0);
  } else if (mouseButton === RIGHT) {
    fill(0, 255, 0);
  } else if (mouseButton === CENTER) {
    fill(0, 0, 255);
  } else{
    fill(255);
  }
}

function mouseDragged() {
  ellipse(mouseX, mouseY, 25, 25);
}
