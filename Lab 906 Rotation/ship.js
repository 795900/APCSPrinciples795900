class ship{
  constructor (x,y,dx,dy    ){
    this.loc = createVector (x,y);
    this.vel = createVector (dx,dy);
    this.angle = 0;
    this.clr = color(random(250), random(250), random(250));
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if (this.loc.x = 0) {
      this.loc.x = width;
    }
    if (this.loc.x = width) {
      this.loc.x = 0;
    }
    if (this.loc.y = 0) {
      this.loc.y = height;
    }
    if (this.loc.y = height) {
      this.loc.y = 0;
    }
  }

  update(){
    this.loc.add(this.vel);
  }

  render(){
    fill(this.clr)
    push();
    translate(this.loc.x,this.loc.y);
    rotate(this.angle);
    triangle(this.loc.x-5,this.loc.y+8,this.loc.x+5, this.loc.y+8, this.loc.x, this.loc.y-8);
    pop();
  }

}
