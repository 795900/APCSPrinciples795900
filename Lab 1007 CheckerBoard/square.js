//Harry Kraus
//1007
class Square{
  constructor(x, y, clr1, clr2, clr3){
    this.x = x;
    this.y = y;
    this.clr1 = clr1;
    this.clr2 = clr2;
    this.clr3 = clr3;
  }
  render(){
      fill(this.clr1,this.clr2,this.clr3);
      rect(this.x,this.y,100,100);
  }
}
