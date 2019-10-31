//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var head
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadHead();


}

//  The draw function is called @ 30 fps
function draw() {
runHead();
}

function loadHead(){
  head = new Head(width/2, height/2, 1);
}

function runHead(){
  head.run();
}
