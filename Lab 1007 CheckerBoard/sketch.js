//  Harry Kraus
// 	1007
//  This is a comment
//  The setup function function is called once when your program begins
var squareX = 0
var squareY = 0
var squares = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(250, 250, 250);
  fill(200, 30, 150);
  loadSquares()
}

function loadSquares(){
  for (rowNum = 1; rowNum<=height/100; rowNum++){
    squareX = 0
    squareY = 0
    if (rowNum % 2 === 0){
      for (i = 0; i < width; i = i+2){
        squares[i] = new Square (i*100,i*100,250,0,0)
        squares[i+1] = new Square (100,100(i+1),20,20,20)
        squareX += 100
        squareY += 100
      }
      for (var i = 0; i < squares.length; i++){
        squares[i].render();
      }
    }
    if (rowNum % 2 === 1){
      squareX = 0
      squareY = 0
      for (i = 0; i < width; i = i+2){
        squares[i] = new Square (squareX,squareY,20,20,20)
        squares[i+1] = new Square (squareX+100,squareY+100,250,0,0)
        squareX += 100
        squareY += 100
      }
      for (var i = 0; i < squares.length; i++){
        squares[i].render();
      }
    }
  }
}
//  The draw function is called @ 30 fps
function draw() {

}
