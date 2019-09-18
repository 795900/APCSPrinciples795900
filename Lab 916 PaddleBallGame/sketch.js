//  Harry Kraus
// 	8/29
var balls = []
var paddle;
var score = 0
function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadPaddle();
  loadBalls(3)
}

function draw() {
  background(20,20,20,100)
  runPaddle()
  runBalls()
  textSize(32)
  text(score,100,100)
}

function loadPaddle(){
  paddle = new Paddle (0,height-200,200,50)
}

function runPaddle(){
  paddle.run();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height-500), random(-5,-2), random(-1,1))
  }
}

function runBalls(){
  for (var i = 0; i < balls.length; i++){
    balls[i].run()
  }
}
