//  Harry Kraus
// 	1021 SelectionSort
//  This is a comment
//  The setup function function is called once when your program begins
var comparisons = 0
var swaps = 0
var numRects = 10
var list = []
var millisecond = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  millisecond = millis();
  for (n = 0; n < width/numRects; n++){
    (random(100))
  }
  for (var i = 0; i < list.length - 1; i++){
      var index = i;
      for (var j = i + 1; j < list.length; j++){
        comparisons++
        if (list[j] < list[index]){
          index = j;
        }
      }
        var smallerNumber = list[index];
        list[index] = list[i];
        list[i] = smallerNumber;
        swaps++
        }
//comparisons = 45
//swaps = 9
console.log(list);
console.log(comparisons);
console.log(swaps);
console.log(millisecond)
}
//  The draw function is called @ 30 fps
function draw() {

}
