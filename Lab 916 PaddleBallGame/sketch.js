//  Harry Kraus
// 	8/29
var balls = []
var paddle;
var score = 0
var screenNumber = 1
function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadPaddle();
  loadBalls(3)
}

function draw() {
  if (screenNumber = 1){
    screen1()
  }
  background(20,20,20,100)
  if (screenNumber === 2){
    runPaddle()
    runBalls()
    fill(250,0,0)
    textSize(32)
    text(score,50,50)
  }

}
function easyMedHard(words,x,y){
  fill(0,0,0)
  textSize(16)
  text(words,x,y)
}
function screen1(){
  fill(0,255,0)
  rect(100,100,100,100)
  easyMedHard("Easy",125,150)
  fill(255,255,0)
  rect(300,300,100,100)
  easyMedHard("Medium",325,350)
  fill(255,0,0)
  rect(500,500,100,100)
  easyMedHard("Hard",525,550)
}


function loadPaddle(){
  paddle = new Paddle (0,height-200,200,50)
}

function runPaddle(){
  paddle.run();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height-500), random(-20,20), random(-20,0))
  }
}

function runBalls(){
  for (var i = 0; i < balls.length; i++){
    balls[i].run()
  }
}
