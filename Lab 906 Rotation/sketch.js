//  Harry Kraus
// 	8/29
//  This is a comment
//  The setup function function is called once when your program begins
var ships = []
var mainBall
function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadShips(100)
  loadBall()
}



function loadShips(n){
    for(var i = 0; i < n; i++){
      ships[i] = new ship(random(width), random(height), random(-3,3),random(-3,3))
  }
}
function loadBall(){
    mainBall = new Ball(random(width), random(height), random(-8,8), random(-8,8))
  }


function runShips(){
  for (var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}
function runBall(){
    mainBall.run();
  }

function draw() {
  background(20,20,20);
  runShips();
  runBall();

}
