//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadBalls(100)

}

function draw() {
  background(20,20,20);
  runBalls();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8,8), random(-8,8))
  }
}

function runBalls(){
  for (var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
