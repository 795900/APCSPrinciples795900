//  Harry Kraus
// 	1211 WarmUp
//  This is a comment
//  The setup function function is called once when your program begins
var listLength = 11
var list = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadNumbers()
  mySort()
  logNumber()
  findAverage()
  findMedian()
}

function loadNumbers(){
  for (n = 0; n < listLength; n++){
    list.push(round(random(100)))
  }
}

function mySort(){
  for (var i = 0; i < list.length - 1; i++){
      var index = i;
      for (var j = i + 1; j < list.length; j++){
        if (list[j] < list[index]){
          index = j;
        }
      }
        var smallerNumber = list[index];
        list[index] = list[i];
        list[i] = smallerNumber;
    }
}

function logNumber(){
  console.log(list)
  fill(random(250), random(250), random(250))
  textSize(32)
  text("List: " + list,100,100)
}

function findAverage(){
  var average = 0
  for (i = 0; i<list.length; i++){
    average = average + list[i]
  }
  average = average/list.length
  console.log(average)
  fill(random(250), random(250), random(250))
  text("Mean: " + average,200,200)
}

function findMedian(){
  console.log(list[5])
  fill(random(100,250), random(100,250), random(100,250))
  text("Median: " + list[5],300,300)
}
