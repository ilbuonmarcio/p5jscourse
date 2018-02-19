var video;

var vScale = 12;
var rSlider, gSlider, bSlider, brightSlider;
var angle = 90;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);

  rSlider = createSlider(0, 255, 255);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 255);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  brightSlider = createSlider(0, 100, 100);
  brightSlider.position(20, 110);
}

function draw() {
  background(0);

  video.loadPixels();
  loadPixels();
  translate(vScale / 2, vScale / 2);

  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
  	  var b = video.pixels[index+2];

  	  r = r * rSlider.value() / 255;
  	  g = g * gSlider.value() / 255;
  	  b = b * bSlider.value() / 255;

      var brightness = brightSlider.value() / 100;

      var w = map(sin(angle), 0, 1, 0, vScale*0.9);

      noStroke();
      fill(r*brightness, g*brightness, b*brightness);
      rectMode(CENTER);
      rect(x*vScale, y*vScale, w, w);
    }
  }

  angle += 0.05;
}
