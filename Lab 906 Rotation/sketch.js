//  Harry Kraus
// 	8/29
//  This is a comment
//  The setup function function is called once when your program begins
var ships = []


function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
//  loadBalls(2)
  loadShips(100)
}



function loadShips(n){
    for(var i = 0; i < n; i++){
      ships[i] = new ship(random(width), random(height), 3, 3)
  }
}

function runShips(){
  for (var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}

function draw() {
  background(20,20,20);
  runShips();
}
