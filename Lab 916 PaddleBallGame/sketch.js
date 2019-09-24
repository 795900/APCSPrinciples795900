//  Harry Kraus
// 	8/29
var balls = []
var paddle;
var score = 0
var health = 10
var screenNumber = 1
var dx
var velLimit
var dy

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadPaddle();
  if (screenNumber === 1){
    screen1()
}
}

function draw() {
  background(20,20,20,100)
  if (screenNumber === 1){
    screen1()
  }
  if (screenNumber === 2){
    screen2()
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
    if (mouseX>100 && mouseX<200 && mouseY>100 && mouseY<200 && mouseIsPressed){
      loadBalls(3)
      dx = random(-3,3)
      dy = random(-3,3)
      velLimit = 3
      screenNumber++
    }
    if(mouseX>300 && mouseX<400 && mouseY>300 && mouseY<400 && mouseIsPressed){
      loadBalls(5)
      dx = random(-5,5)
      dy = random(-5,5)
      velLimit = 5
      screenNumber++
    }
    if(mouseX>500 && mouseX<600 && mouseY>500 && mouseY<600 && mouseIsPressed){
      loadBalls(10)
      dx = random(-10,10)
      dy = random(-10,10)
      velLimit = 10
      screenNumber++
    }
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

 function screen2(){
  fill(250,0,0);
  textSize(32);
  text("Score: "+score,50,50);
  text("Health: "+health,50,100);
  runPaddle();
  runBalls();
 }

function screen3(){

}
