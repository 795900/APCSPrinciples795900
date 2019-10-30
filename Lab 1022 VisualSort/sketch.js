//  Harry Kraus
// 	1023 VisualSort
//  This is a comment
//  The setup function function is called once when your program begins
var rectangles = []
var numRects = 100
var rectX = 0
var horizLoc = []
var heights = []
function setup() {
  frameRate(20);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (n = 0; n < numRects; n++){
    var rectHeight = random(10,height)
    rectangles[n] = new Rectangle(rectHeight,rectX,width/numRects)
    heights.push(rectHeight)
    horizLoc.push(rectX)
    rectX = rectX+(width/numRects)
  }
  for (n = 0; n < numRects; n++){
    rectangles[n].render();
  }
//comparisons = 45
//swaps = 33
}

//  The draw function is called @ 30 fps
function draw() {
  for (j=0; j<heights.length; j++){
          background(5,5,5)
          for (n = 0; n < numRects; n++){
            rectangles[n].render();
          }
    if (heights[j+1] < heights[j]) {
      var tmp = heights[j];
      rectangles[j] = new Rectangle(heights[j+1],horizLoc[j],width/numRects)
      rectangles[j+1] = new Rectangle(heights[j],horizLoc[j+1],width/numRects)

      heights[j] = heights[j+1]
      heights[j+1] = tmp
  }
}
}
