//  Harry Kraus
// 	1011 BubbleSort
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var listLength = 10
  var list = []
  for (i = 0; i = 10; i++){
    list.push(random(100))
  }
  for (i=0; i<list.length; i++) {
    for (j=0; j<list.length; j++){
    if (list[j+1] < list[j]) {
      swap(j);
  }
}
}
console.log(list);
}

function swap(number){
  var tmp = list[number];
  list[number] = list[number+1];
  list[number+1] = tmp;
}
//  The draw function is called @ 30 fps
function draw() {

}
