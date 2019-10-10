//  Harry Kraus
// 	1007
//  This is a comment
//  The setup function function is called once when your program begins
var squares = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(250, 250, 250);
  fill(200, 30, 150);
  makeSquares()
}

function makeSquares(){
  for (rowNum = 0; rowNum<=height/100; rowNum++){
    if (rowNum % 2 === 0){
      for (i = 0; i < width/100; i = i+2){
        squares[i] = new Square (i*100,rowNum*100,250,0,0)
        squares[i+1] = new Square (100*i+100,rowNum*100,20,20,20)
      }
      for (var n = 0; n < squares.length; n++){
        squares[n].render();
      }
    }
    if (rowNum % 2 === 1){
      for (i = 0; i < width/100; i = i+2){
        squares[i] = new Square (100*i,rowNum*100,20,20,20)
        squares[i+1] = new Square (100*i+100,rowNum*100,250,0,0)
      }
      for (var n = 0; n < squares.length; n++){
        squares[n].render();
      }
    }
  }
}
//  The draw function is called @ 30 fps
function draw() {

}
