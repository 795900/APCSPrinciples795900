//  Harry Kraus
// 	8/29
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var mainBall = []


function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadBalls(1)

}

function draw() {
  background(20,20,20);
  runBalls();
  newPaddle();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
      balls[i] = new Ball(random(width), random(height), random(-3,3), random(-3,3),0)
  }
}

function runBalls(){
  for (var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function newPaddle(){
  new Paddle(0,height-20,100,height)
}
