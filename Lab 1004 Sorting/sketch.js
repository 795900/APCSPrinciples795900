//  Harry Kraus
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(250, 250, 250);
  var list = [3,7,2,5,8,9,1,4,6];
  var count = list.length
  console.log(list);
  list = sort(list, count);
  console.log(list);
}

//  The draw function is called @ 30 fps
