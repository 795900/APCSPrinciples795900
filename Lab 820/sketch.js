//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x,y;

var speedX, speedY;

x=200
y=600
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  fill(200, 30, 150);
  speedX1 = random(0,50);
  speedY1 = random(0,50);
  speedX2 = random(0,50);
  speedY2 = random(0,50);
  speedX3 = random(0,50);
  speedY3 = random(0,50);

}

//  The draw function is called @ 30 fps
function draw() {
  background(250, 250, 250);
  x=x+speedX
  y=y+speedY
  if(x > 800){
    speedX = -1*speedX
  }
  if (y > 800){
    speedY = -1 * speedY
  }
  if(x < 0){
    speedX = -1*speedX
  }
  if (y < 0){
    speedY = -1 * speedY
  }
  fill (250,0,0)
  ellipse(x,y,100,100)
  fill (0,250,0)
  ellipse(x+100,y,100,100)
  fill (0,0,250)
  ellipse(x,y-50,100,100)

}
