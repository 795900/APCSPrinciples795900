//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var food
var head
var xSquare
var ySquare
var foodSquare
var foodSquare
function setup() {
  frameRate(15)
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  xSquare = width/40
  ySquare = height/40
  foodSquareX = random(width/20)
  foodSquareY = random(width/20)
  loadFood()
  runFood()
}


//  The draw function is called @ 30 fps

function draw() {
  background(5,5,5)
  loadHead();
  runHead();
  moveHead();
  loadFood()
  runFood()
}

function loadHead(){
  head = new Head(xSquare*20, ySquare*20);
}

function runHead(){
  head.render();
}

function moveHead(){
  if (keyCode === UP_ARROW){
    ySquare--
  }
  if (keyCode === DOWN_ARROW){
    ySquare++
  }
  if (keyCode === RIGHT_ARROW){
    xSquare++
  }
  if(keyCode === LEFT_ARROW){
    xSquare--
  }
}

function loadFood(){
  food = new Food()
}

function runFood(){
  food.render();
}
