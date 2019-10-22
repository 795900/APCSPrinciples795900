//  Harry Kraus
// 	1011 BubbleSort
//  This is a comment
//  The setup function function is called once when your program begins
var comps = 0
var swaps = 0
var listLength = 100
var list = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (n = 0; n < listLength; n++){
    list.push(random(1000))
  }
  for (i=0; i<list.length; i++) {
    for (j=0; j<list.length; j++){
    comps++
    if (list[j+1] < list[j]) {
      swap(j);
  }
}
}
//comparisons = 45
//swaps = 33
console.log(list);
console.log(comps);
console.log(swaps);
}

function swap(number){
  var tmp = list[number];
  list[number] = list[number+1];
  list[number+1] = tmp;
  swaps++
}
//  The draw function is called @ 30 fps
function draw() {

}
