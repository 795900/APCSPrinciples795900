//Harry Kraus
9/25
class Paddle{
  constructor(x, y, w, h){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h

  }

  run(){
    this.update();
    this.render();
  }

  update(){
    var mouseLoc = createVector(mouseX,this.loc.y);
    this.loc = p5.Vector.lerp(this.loc,mouseLoc,.2)
    }

  render(){
      fill(250,0,0);
      rect(this.loc.x,this.loc.y, this.w, this.h)

  }

}
