//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var b1, b2;

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  b1 = new Ball(random(width),random(height),random(-5, 5),random(-3, 3))
  b2 = new Ball(random(width),random(height),random(-5, 5),random(-3, 3))
  b3 = new Ball(random(width),random(height),random(-5, 5),random(-3, 3))

}

function draw() {
  background(20,20,20);
  b1.run();
  b2.run();
  b3.run();
}
