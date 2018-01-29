var video;

var vScale = 6;
var rSlider, gSlider, bSlider;
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

      var brightness = (r+g+b)/3;

      var w = map(sin(angle), 0, 1, 0, vScale*1.33);

      noStroke();
      fill(r, g, b);
      rectMode(CENTER);
      rect(x*vScale, y*vScale, w, w);
    }
  }
  
  angle += 0.02;
}
