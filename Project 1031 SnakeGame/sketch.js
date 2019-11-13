//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var screenNumber = 1
var buttonX
var buttonY
var body = []
var food
var head
var xSquare
var ySquare
function setup() {
  frameRate(15)
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  xSquare = width/40
  ySquare = height/40
  // foodSquareX = round(random(width/20))
  // foodSquareY = round(random(width/20))
  loadFood()
}


//  The draw function is called @ 30 fps

function draw() {
  if (screenNumber === 1){
    screen1();
  }
  if (screenNumber === 2){
    screen2();
  }
}

function screen1(){
  textSize(50)
  fill(0,250,0)
  text("Snake Game", 250,250)
  fill (250,250,250)
  buttonX = 300
  buttonY = 500
  rect(300, 500, 200, 200)
  fill(0,0,0)
  textSize(32)
  text("Play", 375, 600)
  if (mouseX>300 && mouseX<500 && mouseY>500 && mouseY<700 && mouseIsPressed){
    screenNumber++
  }
}

function screen2(){
  background(5,5,5)
  loadHead();
  runHead();
  moveHead();
  loadBody();
  runBody()
  runFood();
}
function loadHead(){
  head = new Head(xSquare*20, ySquare*20);
}

function runHead(){
  head.run();
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
  food = new Food(round(random(width/20-1)), round(random(width/20-1)))
}

function runFood(){
    food.run();
  }

function loadBody(){
  if(xSquare === food.x && ySquare === food.y){
    body[0] = new Body (head.x, head.y)
    for (i = body.length; i>=0; i--){
      body[i] = new Body(xSquare*20, ySquare*20)
    }
  }
  for (i = body.length-1; i>=0; i--){
    if (i >= 1){
      body[i] = new Body(body[i-1].x, body[i-1].y)
    }
    if (i === 0){
      body[i] = new Body(head.x, head.y)
    }
  }
}

  function runBody(){
    if (body.length>=1){
      for (i = body.length-1; i >= 0; i--){
        body[i].render();
      }
    }
  }
