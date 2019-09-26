//  Harry Kraus
// 	8/29
var balls = [];
var paddle;
var score = 0;
var health = 3;
var screenNumber = 1;
var velX = 0
var velY = 0
var velLimit;
var btnEasy, btnMedium, btnHard;

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadPaddle();
  if (screenNumber === 1){
    makeButtons();
    screen1();
}
}

function draw() {
  background(250,250,250,100)
  if (screenNumber === 1){
    screen1()
  }
  if (screenNumber === 2){
    screen2()
  }
  }

function makeButtons(){
  btnEasy = new Button (100,100,"Easy",0,250,0)
  btnMedium = new Button (300,300,"Medium",255,255,0)
  btnHard = new Button (500,500,"Hard",255,0,0)
}

 function screen1(){
    btnEasy.run();
    btnMedium.run();
    btnHard.run();
    if (mouseX>100 && mouseX<200 && mouseY>100 && mouseY<200 && mouseIsPressed){
      velX = random(-8,-5)
      velY = random(-8,-5)
      loadBalls(5)
      screenNumber++
    }
    if(mouseX>300 && mouseX<400 && mouseY>300 && mouseY<400 && mouseIsPressed){
      velX = random(-9,-5)
      velY = random(-9,-5)
      loadBalls(10)
      screenNumber++
    }
    if(mouseX>500 && mouseX<600 && mouseY>500 && mouseY<600 && mouseIsPressed){
      velX = random(-10,-5)
      velY = random(-10,-5)
      loadBalls(15)
      screenNumber++
    }
   }

function loadPaddle(){
   paddle = new Paddle (0,height-150,100,50)
}

function runPaddle(){
   paddle.run();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height-500), velX, velY, 0)
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
