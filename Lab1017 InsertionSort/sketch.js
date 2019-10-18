//  Harry Kraus
// 	1011 BubbleSort
//  This is a comment
//  The setup function function is called once when your program begins
var listLength = 10
var list = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (n = 0; n < listLength; n++){
    list.push(random(10))
  }
  for (i=1; i<list.lengt; i++) {
    for (j=i; j>0; j--){
      if (list[j]<list[j-1]) {
        swap(j);
  }
}
}
console.log(list);
}

function swap(number){
  temp = list[number];
  list[number] = list[number-1];
  list[number-1] = temp;
}
//  The draw function is called @ 30 fps
function draw() {

}
