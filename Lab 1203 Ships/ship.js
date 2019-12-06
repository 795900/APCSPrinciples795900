class Ship{
  constructor (x,y,dx,dy){
    this.loc = createVector (x,y);
    this.vel = createVector (dx,dy);
    this.angle = 0;
    this.acc = 0
    this.clr = color(250, 0, 250);
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
     if (this.loc.x < 0) {
       this.vel.x = -this.vel.x;
     }
    if (this.loc.x > width) {
      this.vel.x = -this.vel.x;
    }
    if (this.loc.y < 0) {
      this.vel.y = -this.vel.y;
    }
    if (this.loc.y > height) {
      this.vel.y = -this.vel.y;
    }
  }

  update(){
    var distToPlanet;
    distToPlanet = this.loc.dist(planet.loc)
    if (distToPlanet != 0){
      this.acc = p5.Vector.sub(planet.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1)
    }
    this.vel.limit(5)
    this.vel.add(this.acc)
    this.loc.add(this.vel);
  }

  render(){
    fill(this.clr)
    this.angle = this.vel.heading() + 360
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5,8,5,8,0,-8);
    pop();
  }

}
