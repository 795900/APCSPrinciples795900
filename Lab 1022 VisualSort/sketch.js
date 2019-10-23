//  Harry Kraus
// 	1011 BubbleSort
//  This is a comment
//  The setup function function is called once when your program begins
var comps = 0
rect = []
var numRects = 20
var swaps = 0
var tracker = 0
var heights = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (n = 0; n < width/numRects; n++){
    var rectHeight = random(height)
    rect = new Rectangle(rectHeight,tracker,width/numRects)
    heights.push(rectHeight)
  }
  rect.render()
  for (i=0; i<heights.length; i++) {
    for (j=0; j<heights.length; j++){
    comps++
    if (heights[j+1] < heights[j]) {
      swap(j);
  }
}
}
//comparisons = 45
//swaps = 33
console.log(heights);
console.log(comps);
console.log(swaps);
}

function swap(number){
  var tmp = heights[number];
  heights[number] = heights[number+1];
  heights[number+1] = tmp;
  swaps++
}
//  The draw function is called @ 30 fps
function draw() {

}
