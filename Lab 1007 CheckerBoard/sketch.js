//  Harry Kraus
// 	1007
//  This is a comment
//  The setup function function is called once when your program begins
squareX = 0
squareY = 0
squares = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(250, 250, 250);
  fill(200, 30, 150);
}

function loadSquares(){
  for (rowNum = 1; rowNum<=height/100; rowNum++){
    if (rowNum % 2 === 0){
      for (i = 0; i < width - 7; i = i+2){
        squares[i] = new Square (squareX,squareY,250,0,0)
        squares[i] = new Square (squareX,squareY,20,20,20)
      }
    }
    if (rowNum % 2 === 1){

    }
  }
}
//  The draw function is called @ 30 fps
function draw() {

}
