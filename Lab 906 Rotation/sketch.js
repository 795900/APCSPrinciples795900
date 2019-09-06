//  Harry Kraus
// 	8/29
//  This is a comment
//  The setup function function is called once when your program begins
var ships = []
//var mainBall = []

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadBalls(500)

}

function draw() {
  background(20,20,20);
  runShips();
}

function loadBalls(n){
  //mainBall = new Ball (width/2, height/2, random(-1,1), random(-1,1), -1)
    for(var i = 0; i < n; i++){
      ships[i] = new ship(random(width), random(height), random(-3,3), random(-3,3),0)
  }
}

function runShips(){
  //mainBall.run();
  for (var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}
