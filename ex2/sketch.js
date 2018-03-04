/*
Exercise 2: GameOfLife using WebGL

Here we have a simple sketch that simulates the GameOfLife simulation using 3D cubes
and the WebGL functionalities provided by the p5js library/framework.

License: MIT

Authors: Alberto Venturi, Damiano Visentini, Alessandro Marchioro
*/

var w;
var columns;
var rows;
var board;
var next;

function setup() {
  createCanvas(1280, 720, WEBGL);
  w = 20;

  // Calculate minumum columns and rows for cell's simulation
  columns = floor(width/w);
  rows = floor(height/w);

  // Create a 2D array for the board
  board = new Array(columns);
  for (var i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }

  // Create a second array for swapping them during the simulation
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }

  // Init boards and simulation
  init();
}

function draw() {
  /*
  This function permits us to have a simple camera
  to view our 3D objects displayed on the screen.
  */
	orbitControl();

  background(0); // Clear the framebuffer
  generate(); // Call the generate function that runs the simulation
  stroke(0, 255, 0); // Set draw mode "stroke" to draw shapes' borders with 0, 255, 0 RGB color

  /*
  Translate draw by -width/2, -height/2.
  This is mandatory because, as all other 3D libraries and frameworks around,
  the x and y reference coordinates are always at the screen's center,
  and the width and height of the screen are both normalized to -1, +1;
  */
  translate(-width/2, -height/2);

  fill(0, 128, 0); // Set draw mode "fill" to fill shapes' interns with 0, 128, 0 RGB color

  // Cycle throught simulation's array
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {

      // Create a new draw mode stack
      push();

      // If the cell is alive, then draw it
      if ((board[i][j] == 1)) {
        // Translate the pen at the right position, depending on matrix cell's index
        translate(i*w, j*w);
        // Draw a 3D box with dimension w = w, h = w, q = w
        box(w, w, w);
      }

      pop(); // Reset draw stack to match the state before push function was called
    }
  }
}

/*
This function is called at every keyboard's button keypress.
It will reset the board at each call.
*/
function keyPressed() {
  init();
}

/*
This function sets the board to a random state.
*/
function init() {
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      // Lining the edges with 0s
      if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
      // Filling the rest randomly
      else board[i][j] = floor(random(2));
      next[i][j] = 0;
    }
  }
}

/*
This function calculate simulation's next generation
*/
function generate() {

  // Loop through every spot in our 2D array and check spots neighbors
  for (var x = 1; x < columns - 1; x++) {
    for (var y = 1; y < rows - 1; y++) {

      // Add up all the states in a 3x3 surrounding grid
      var neighbors = 0;
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }

      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= board[x][y];

      // Applying rules of Game of Life
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
      else                                             next[x][y] = board[x][y]; // Stasis
    }
  }

  // Swap matrixes
  var temp = board;
  board = next;
  next = temp;
}
