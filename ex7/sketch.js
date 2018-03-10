/*
Exercise 7: agar.io clone

This is a clone of agar.io web game

License: MIT

Authors: Alessandro Marchioro
*/

class Player{

  constructor(x, y, color, size){
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size;
    this.radius = size / 2;
  }

  move(dx, dy){
    this.x += dx;
    this.y += dy;
    this.keepUnderScreen();
  }

  grow(other){
    this.size += other.size / 4;
    this.radius = this.size / 2;
    this.dropNewCells();
  }

  dropNewCells(){
    enemies.push(
      new Enemy(
        num_of_enemies,
        random(0, width),
        random(0, height),
        (
          random(100, 255),
          random(100, 255),
          random(100, 255)
        ),
        random(8, 32)
      )
    )
    num_of_enemies++;
  }

  eat(other){
    if (this.x - this.radius < other.x && this.x + this.radius > other.x
     && this.y - this.radius < other.y && this.y + this.radius > other.y){
       this.grow(other);
       return true;
    }
    return false;
  }

  keepUnderScreen(){
    if (this.x < 0) this.x = 0;
    if (this.x > width) this.x = width;
    if (this.y < 0) this.y = 0;
    if (this.y > height) this.y = height;
  }

  draw(){
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

class Enemy{

  constructor(id, x, y, color, size){
    this.id = id;
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size;
  }

  move(){
    this.x += random(-3, 3);
    this.y += random(-3, 3);
    this.keepUnderScreen();
  }

  keepUnderScreen(){
    if (this.x < 0) this.x = 0;
    if (this.x > width) this.x = width;
    if (this.y < 0) this.y = 0;
    if (this.y > height) this.y = height;
  }

  draw(){
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

let player;
let enemies;
let num_of_enemies;
let dx, dy;

function setup(){
  createCanvas(800, 800);
  noStroke();

  player = new Player(width/2, height/2, [0, 255, 0], 16);
  dx = dy = 0;

  enemies = new Array();
  num_of_enemies = 32;

  for(var i = 0; i < num_of_enemies; i++){
    enemies.push(
      new Enemy(
        i,
        random(0, width),
        random(0, height),
        (
          random(100, 255),
          random(100, 255),
          random(100, 255)
        ),
        random(8, 32)
      )
    )
  }

}

function draw(){

  background(51);

  if(keyIsDown(LEFT_ARROW)){
    dx -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    dx += 5;
  }
  if(keyIsDown(UP_ARROW)){
    dy -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    dy += 5;
  }

  player.move(dx, dy);
  dx = dy = 0;

  for(var i = 0; i < num_of_enemies; i++){
    if(player.eat(enemies[i])){
      enemies.splice(i, 1);
      num_of_enemies--;
    } else{
      enemies[i].move();
      enemies[i].draw();
    }
  }

  player.draw();

}
