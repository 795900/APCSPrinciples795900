

class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0, 1)
    this.clr = color(random(255),random(255),random(255))
    this.mainBall = createVector(random(200,600),random(200,600))
    this.id = id
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x<0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.x>width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y<0){
      this.vel.y = -this.vel.y
    }
    if(this.loc.y>height){
      this.vel.y = -this.vel.y
    }
    if(this.loc.y>height+20){
      this.reset()
    }
  }
  update(){
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    var distToMainBall;
    if (this.id>=0){
      distToMainBall = this.loc.dist(this.mainBall.loc)
      if(distToMainBall < 250){
        this.acc = p5.Vector.sub(this.mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0,1)
      }
      if (distToMainBall<250){
        this.acc = p5.Vector(this.loc, other.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
    vel.limit(5)
      }
    }
  }
  render(){
    if (id>=0){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 20,20)
      id++
    }

  }
  mainBall(){
    if(id<0){
      fill(250,250,250)
      ellipse(this.mainBall.x, this.mainBall.y)
      id++
    }

  }
}
