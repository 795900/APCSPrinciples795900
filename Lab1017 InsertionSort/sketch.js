//  Harry Kraus
// 	1011 InsertionSort
//  This is a comment
//  The setup function function is called once when your program begins
var swaps = 0
var comparisons = 0
var listLength = 10
var list = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (n = 0; n < listLength; n++){
    list.push(random(100))
  }
  for (i=1; i<list.length; i++) {
    for (j=i; j>0; j--){
      comparisons++
      if (list[j]<list[j-1]) {
        swap(j)
      }
    }
  }
//comparisons = 45
//swaps = 21
console.log(list);
console.log(comparisons)
console.log(swaps)
}
function swap(number){
  var temp = list[number];
  list[number] = list[number-1];
  list[number-1] = temp;
  swaps++
}

//  The draw function is called @ 30 fps
function draw() {

}
