//  Harry Kraus
// 	8/29
//  This is a comment
//  The setup function function is called once when your program begins
var ball = []
var paddle = []


function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadThings()

}

function draw() {
  background(20,20,20,100)
  runThings()
}

function loadThings(){
ball = new Ball(random(width), random(height), random(-3,3), random(-3,3))
paddle = new Paddle (0,height-200,200,50)
}

function runThings(){
ball.run();
paddle.run();
  }
