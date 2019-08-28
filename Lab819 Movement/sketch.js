//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x,y;
y=250;
x=5;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(250, 250, 250);
  fill(200, 30, 150);

}

//  The draw function is called @ 30 fps
function draw() {
  y=y+1;
  x=x+1;
  ellipseMode(CENTER)
 fill(250,250,250);
 strokeWeight(10);
 ellipse(250,y,100,100); //left eye
 ellipse(500,y,100,100); //right eye
 fill(0,0,0);
 ellipse(250,y,20,20); //left pupil
 ellipse(500,y,20,20); //right pupil
 strokeWeight(x);
 line(250,500,500,500); //mouth
 strokeweight(0);
}
