//  Harry Kraus
// 	12/12
//  This is a comment
//  The setup function function is called once when your program begins
var ship = []
var planet
function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  loadShip(30)
  loadPlanet()
  sliderAttractionText = createP("Attract")
  sliderAttractionText.position(100,350)
  sliderAttraction = createSlider(0, 5, 1);
  sliderAttraction.position(100, 400);
  sliderLimitText = createP("Velocity Limit")
  sliderLimitText.position(100,450)
  sliderLimit = createSlider(0, 20, 5);
  sliderLimit.position(100, 500);


}



function loadShip(n){
  for (i = 0; i<n; i++){
      ship[i] = new Ship(random(width/2), random(height/2), random(-5,5),random(-5,5))
  }
}
function loadPlanet(){
    planet = new Planet(random(width/2,width), random(height/2,height), random(-2,2), random(-2,2))
  }


function runShip(){
  for (i = 0; i<ship.length; i++){
    ship[i].run();
  }
}
function runPlanet(){
    planet.run();
  }

function draw() {
  background(20,20,20);
  runShip();
  runPlanet();

}
