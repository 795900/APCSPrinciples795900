//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(250, 250, 250);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  ellipseMode(CENTER)
 fill(250,250,250);
 strokeWeight(10)
 ellipse(250,250,100,100);
 ellipse(500,250,100,100)
 fill(0,0,0)
 ellipse(250,250,20,20);
 ellipse(500,250,20,20)
 strokeWeight(100)
 line(250,500,500,500)
 strokeweight(0)
}
