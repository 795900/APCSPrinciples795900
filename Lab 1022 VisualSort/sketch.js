//  Harry Kraus
// 	1023 VisualSort
//  This is a comment
//  The setup function function is called once when your program begins
var rectangles = []
var numRects = 20
var rectX = 0
var horizLoc = []
var heights = []
function setup() {
  frameRate(1);
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
    swap()
  }

function swap(){
  for (i=0; i<heights.length; i++) {
    for (number=0; number<heights.length; number++){
      if (heights[number+1] < heights[number]) {
        background(5,5,5)
        var tmp = heights[number];
        rectangles[number] = new Rectangle(heights[number+1],horizLoc[number],width/numRects)
        rectangles[number+1] = new Rectangle(heights[number],horizLoc[number+1],width/numRects)
        for (n = 0; n < numRects; n++){
          rectangles[n].render();
        }
        heights[number] = heights[number+1]
        heights[number+1] = tmp
        console.log(heights)

}
}
}
}
