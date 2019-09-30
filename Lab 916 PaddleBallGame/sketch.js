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
var btnEasy, btnMedium, btnHard, btnRestart;

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadPaddle();
  if (screenNumber === 1){ //intro screen
    makeButtons();
    screen1();
}
}

function draw() {
  background(250,250,250,100)
  if (screenNumber === 1){ //intro screen
    screen1()
  }
  if (screenNumber === 2){ //play screen
    screen2()
  }
  if (screenNumber === 3){ //"you lose" screen
    screen3()
  }
  }

function makeButtons(){
  btnEasy = new Button (100,100,"Easy",0,250,0)
  btnMedium = new Button (300,300,"Medium",255,255,0)
  btnHard = new Button (500,500,"Hard",255,0,0)
  btnRestart = new Button (350,550,"Restart", 250, 128, 114)
}

 function screen1(){
    btnEasy.run();
    btnMedium.run();
    btnHard.run();
    text("Hit the ball with the top of the paddle to get points.", 50, 500)
    text("If the ball hits the bottom of the paddle, you will lose a life, ", 50, 525)
    text("and the ball will disappear. You have three lives.  Good luck.", 50, 550)
    if (mouseX>100 && mouseX<200 && mouseY>100 && mouseY<200 && mouseIsPressed){ //easy button
      velX = random(-8,-5)
      velY = random(-8,-5)
      loadBalls(5)
      screenNumber++
    }
    if(mouseX>300 && mouseX<400 && mouseY>300 && mouseY<400 && mouseIsPressed){ //medium button
      velX = random(-9,-5)
      velY = random(-9,-5)
      loadBalls(10)
      screenNumber++
    }
    if(mouseX>500 && mouseX<600 && mouseY>500 && mouseY<600 && mouseIsPressed){ //hard button
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
  if (health <= 0){
    screenNumber++
  }
 }

function screen3(){
  fill(20,20,20)
  textSize(50)
  text("You lose!",300,400)
  text("Score: "+score, 300,450)
  btnRestart.run();
  if(mouseX>350 && mouseX<450 && mouseY>550 && mouseY<650 && mouseIsPressed){ //restart button
    screenNumber = 1
    health = 3
    score = 0
}
}
