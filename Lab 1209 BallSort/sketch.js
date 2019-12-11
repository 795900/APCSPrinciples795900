//  Harry Kraus
// 	1209 BallSort
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var numBalls = 3
var ballX = 0
var ballLoc = []
var reds = []
function setup() {
  frameRate(20);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (n = 0; n < numBalls; n++){
    var numRed = random(100, 255)
    balls[n] = new Ball(width/numBalls,numRed,ballX)
    reds.push(numRed)
    ballLoc.push(ballX)
    ballX = ballX+(width/numBalls)
  }
  for (n = 0; n < numBalls; n++){
    balls[n].render();
  }
}

//  The draw function is called @ 30 fps
function draw() {
  for (j=0; j<reds.length; j++){
          background(5,5,5)
          for (n = 0; n < numBalls; n++){
            balls[n].render();
          }
    if (reds[j+1] < reds[j]) {
      var tmp = reds[j];
      balls[j] = new Ball(width/numBalls,reds[j+1],ballLoc[j])
      balls[j+1] = new Ball(width/numBalls,reds[j],ballLoc[j+1])
      reds[j] = reds[j+1]
      reds[j+1] = tmp
  }
}
}
