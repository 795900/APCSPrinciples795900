//  Harry Kraus
// 	1011 BubbleSort
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var list = [2,6,4,10,4,50,6,7,1,7,0,3]
  for (i=0; i<list.length; i++) {
    for (j=0; j<list.length; j++){
/* compare the two neighbors*/
    if (list[j+1] < list[j]) {
/* swap a[j] and a[j+1]*/
      var tmp = list[j];
      list[j] = list[j+1];
      list[j+1] = tmp;
  }
}
}
console.log(list);
fill (250,250,250)
textSize(50)
text(list, 150,400)
}

//  The draw function is called @ 30 fps
function draw() {

}
