var snake,foodX,foodY;

function setup() {
  createCanvas(800,400);
  snake=new Snakes();
  foodLocation();
}

function draw() {
  background("orange"); 
  snake.update();
  if(snake.eat(foodX,foodY)) {
    foodLocation();
  }
  snake.display();
  fill("red");
  rect(foodX,foodY,20,20); 
  snake.gameOver();
  frameRate(9);
}

function keyPressed() {
  if(keyCode===UP_ARROW) {
    snake.ydir=-20;
    snake.xdir=0;
  }
  if(keyCode===DOWN_ARROW) {
    snake.ydir=20;
    snake.xdir=0;
  }
  if(keyCode===LEFT_ARROW) {
    snake.xdir=-20;
    snake.ydir=0;
  }
  if(keyCode===RIGHT_ARROW) {
    snake.xdir=20;
    snake.ydir=0;
  }
}

function foodLocation (){ 
  foodX = floor(random(0,40))*20;
   foodY = floor(random(0,20))*20; 
}