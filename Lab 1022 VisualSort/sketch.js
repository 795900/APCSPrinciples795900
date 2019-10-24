//  Harry Kraus
// 	1023 VisualSort
//  This is a comment
//  The setup function function is called once when your program begins
var rectangles = []
var numRects = 20
var rectX = 0
var heights = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (n = 0; n < width/numRects; n++){
    var rectHeight = random(10,height)
    rectangles[n] = new Rectangle(rectHeight,rectX,width/numRects)
    heights.push(rectHeight)
    rectX = rectX+(width/numRects)
  }
  for (n = 0; n < width/numRects; n++){
    rectangles[n].render();
  }
  for (i=0; i<heights.length; i++) {
    for (j=0; j<heights.length; j++){
    if (heights[j+1] < heights[j]) {
      swap(j);
  }
}
}
//comparisons = 45
//swaps = 33
console.log(heights);
}

function swap(number){
  var tmp = heights[number];
  rectangles[number] = new Rectangle(heights[number+1],rectX,width/numRects);
  rectangles[number+1] = new Rectangle(heights[number],rectX,width/numRects);
  rectangles[number].render()
  rectangles[number+1].render()
}
//  The draw function is called @ 30 fps
function draw() {

}
