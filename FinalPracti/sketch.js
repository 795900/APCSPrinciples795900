//  Harry Kraus
// 	8/29
//  This is a comment
//  The setup function function is called once when your program begins
var ball = []
var paddle = []


function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadThings(10)

}

function loadThings(n){
paddle = new Paddle (0,400,200,50)
for (var i=0;i<n;i++){
  ball[i] = new Ball(random(width), random(height-200), random(-10,10), random(-10,10))
}
}


function runThings(){
  paddle.run();
  for (var i=0; i<ball.length; i++){
    ball[i].run();
}
}

function draw() {
  background(20,20,20,100)
  runThings()
}
