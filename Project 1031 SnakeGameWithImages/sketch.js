//  Harry Kraus
// 	1118
//  This is a comment
//  The setup function function is called once when your program begins
var screenNumber = 1
var img
var score = 0
var buttonX
var buttonY
var body = []
var food
var head
var xSquare
var ySquare
function setup() {
  frameRate(20)
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(250, 250, 250);
  fill(200, 30, 150);
  img = loadImage('banana.png')
  xSquare = width/40
  ySquare = height/40
  loadFood()
}


//  The draw function is called @ 30 fps

function draw() {
  if (screenNumber === 1){
    background(250, 250, 250)
    screen1();
  }
  if (screenNumber === 2){
    screen2();
  }
  if (screenNumber === 3){
    screen3();
  }
}

function screen1(){ //opening screen
  score = 0
  textSize(50)
  fill(5,5,5)
  text("Snake Game", 250,250)
  fill (5,5,5)
  buttonX = 300
  buttonY = 500
  rect(300, 500, 200, 200)
  fill(250, 250, 250)
  textSize(32)
  text("Play", 375, 600)
  if (mouseX>300 && mouseX<500 && mouseY>500 && mouseY<700 && mouseIsPressed){
    screenNumber++
  }
}

function screen2(){ //gameplay
  background(250, 250, 250)
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
  else if (keyCode === DOWN_ARROW){
    ySquare++
  }
  else if (keyCode === RIGHT_ARROW){
    xSquare++
  }
  else if(keyCode === LEFT_ARROW){
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
    score++
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

  function screen3(){ //game over and restart
    fill(5,5,5)
    text("Game Over", 350, 600)
    text("Score: " + score, 350,500)
    fill(5,5,5)
    rect(300, 100, 200, 200)
    fill(250, 250, 250)
    textSize(32)
    text("Restart", 375, 200)
    if (mouseX>300 && mouseX<500 && mouseY>100 && mouseY<300 && mouseIsPressed){
      screenNumber = 1
      body = []
      keyCode = CONTROL
      setup()
    }
  }
