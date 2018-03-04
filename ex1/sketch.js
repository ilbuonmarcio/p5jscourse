/*
Exercise 1: WebCam and filter-editing

Here we have a simple sketch that has a video input from a webcam
and a canvas that represents the elaboration that we did on the source
by tuning R, G, B and brightness slider filters.

License: MIT

Authors: Alberto Venturi, Damiano Visentini, Alessandro Marchioro
*/

var video;

/*
Aspect ratio between the video source and the output canvas.
If vScale = 1  --> Ratio 1:1
If vScale = 4  --> Ratio 1:4
If vScale = 16 --> Ratio 1:16
The bigger the vScale, the bigger the pixels on output canvas.
*/
var vScale = 16;

var rSlider, gSlider, bSlider, brightSlider;

/*
Function called at startup, and never after
*/
function setup() {
  // Canvas init and setup
  createCanvas(640, 480);
  pixelDensity(1); // Sets pixel density ratio to 1:1 even for retina-like and scaled displays

  // Video init and positioning
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);

  // Sliders init and positioning
  rSlider = createSlider(0, 255, 255);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 255);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  brightSlider = createSlider(0, 100, 100);
  brightSlider.position(20, 110);
}

/*
Function called at each frame
*/
function draw() {
  // Clear background with color 0, 0, 0
  background(0);

  // Load variable video.pixels with pixels from current video framebuffer
  video.loadPixels();

  // Load variable pixels with pixels from current canvas framebuffer
  loadPixels();

  // Translate scene draw to vScale/2, vScale/2 for x, y respectively
  translate(vScale / 2, vScale / 2);

  // Cycle through each of video framebuffer's pixels
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {

      // Get the current pixel index in the one-dim-array with a formula
      var index = (video.width - x + 1 + (y * video.width))*4;

      // Save R, G and B channels of this pixel in temp variables
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
  	  var b = video.pixels[index+2];

      // Change pixel value of each channel by slider's current values
      r = r * rSlider.value() / 255;
  	  g = g * gSlider.value() / 255;
  	  b = b * bSlider.value() / 255;

      // Change pixel brightness by slider's current value
      var brightness = brightSlider.value() / 100;

      // Set draw mode "noStroke" so there will be no borders while drawing shapes
      noStroke();

      // Set draw mode "fill" with elaborated color values for each channel
      fill(r*brightness, g*brightness, b*brightness);

      // Set draw mode "rectMode" to center to set the drawing coordinates (0, 0) to the
      // center of the shape instead of the left up corner as usual
      rectMode(CENTER);

      // Draw a rect at x = param1, y = param2, with dimension w = param3, h = param4
      rect(x*vScale, y*vScale, vScale, vScale);
    }
  }
}
