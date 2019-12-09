

class Ball{
  constructor(radius, red, x){
    this.radius = radius
    this.red = red;
    this.x = x
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){

  }

  render(){
    fill(this.red,0,0)
    ellipse(this.x ,200, this.radius, this.radius)
  }

}
