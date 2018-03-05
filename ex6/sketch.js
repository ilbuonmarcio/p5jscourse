/*
Exercise 6: Obj File Viewer

This is a simple sketch that loads a .obj file and display it.

License: MIT

Authors: Alberto Venturi, Damiano Visentini, Alessandro Marchioro
*/

let shield;

function preload() {
  shield = loadModel('assets/shield.obj'); // Load the obj file from disk
}

function setup() {
  createCanvas(400, 400, WEBGL); // Create a WebGL context view
}

function draw() {
  background(200); // Clear framebuffer with 200, 200, 200 RGB color
  directionalLight(0, 200, 255, new p5.Vector(0, 5000, 500)); // Add light to the scene
  rotateX(frameCount * 0.01); // Rotate X coordinate view by global variable frameCount
  rotateY(frameCount * 0.01); // Rotate Y coordinate view by global variable frameCount
  scale(18, 18, 18);
  model(shield); // Display the model on canvas
}
