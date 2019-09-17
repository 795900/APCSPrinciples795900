//  Harry Kraus
// 	8/29
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle = []
function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadPaddle();
  loadBalls(5)
}

function draw() {
  background(20,20,20,100)
  runPaddle()
  runBalls()
}

function loadPaddle(){
  paddle = new Paddle (0,height-300,200,50)
}

function runPaddle(){
  paddle.run();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-1,1), random(-1,1))
  }
}

function runBalls(){
  for (var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
