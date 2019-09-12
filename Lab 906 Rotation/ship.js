class ship{
  constructor (x,y,dx,dy){
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
    var distToMainBall;
      distToMainBall = this.loc.dist(mainBall.loc)
      if(distToMainBall < 250){
        this.acc = p5.Vector.sub(mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1)
      }
      if (distToMainBall<150){
        this.acc = p5.Vector.sub(this.loc, mainBall.loc );
        this.acc.normalize();
        this.acc.mult(0.3);
        this.vel.limit(3)
      }
    this.vel.add(this.acc)
    this.loc.add(this.vel);
    this.vel.limit(3)
  }

  render(){
    fill(this.clr)
    this.angle = this.vel.heading()
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5,8,5,8,0,-8);
    pop();
  }

}
