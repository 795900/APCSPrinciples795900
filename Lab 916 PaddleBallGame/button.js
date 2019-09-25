//Harry Kraus
//9/25
class Button{
  constructor(x,y,msg,clr1,clr2,clr3){
    this.loc = createVector(x,y)
    this.message = msg
    this.clr1 = clr1
    this.clr2 = clr2
    this.clr3 = clr3
  }

  run(){
    this.render();
  }
  render(){
    fill(this.clr1, this.clr2, this.clr3);
    rect(this.loc.x,this.loc.y,100,100);
    fill(0,0,0)
    textSize(16)
    text(this.message,this.loc.x + 25, this.loc.y + 50)
  }
}
