//  Harry Kraus
// 	8/29
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var mainBall

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadBalls(100)

}

function draw() {
  background(250,250,250);
  runBalls();
}

function loadBalls(n){
  mainBall = new Ball (width/2, height/2, random(-1,1), random(-1,1), -1)
    for(var i = 0; i < n; i++){
      balls[i] = new Ball(random(width), random(height), random(-1,1), random(-1,1),0)
  }
}

function runBalls(){
  mainBall.run();
  for (var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
