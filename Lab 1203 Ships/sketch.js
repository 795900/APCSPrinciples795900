//  Harry Kraus
// 	12/03
//  This is a comment
//  The setup function function is called once when your program begins
var ship
var planet
function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadShip(100)
  loadPlanet()
}



function loadShip(n){
      ship = new Ship(random(width), random(height), random(-5,5),random(-5,5))
}
function loadPlanet(){
    planet = new Planet(random(width), random(height), random(-2,2), random(-2,2))
  }


function runShip(){
    ship.run();
}
function runPlanet(){
    planet.run();
  }

function draw() {
  background(20,20,20);
  runShip();
  runPlanet();

}
