/*
Exercise 4: Paint replica

This is a simple sketch that emulate Paint.

License: MIT

Authors: Alberto Venturi, Damiano Visentini, Alessandro Marchioro
*/

function setup(){
  createCanvas(500, 500);
  background(50); // Clear framebuffer with 50, 50, 50 RGB color
  noStroke(); // Set draw mode "noStroke" for following drawings
}

function draw(){}

/*
Function that changes draw mode "fill" color depending on last mouse button pressed
*/
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

/*
Function that draws an ellipse at mouse's current position,
using mouseX & mouseY global variables
*/
function mouseDragged() {
  ellipse(mouseX, mouseY, 25, 25);
}
