

class Ball{
  constructor(x, y, dx, dy, id){
    this.id = id
    this.loc = createVector(x, y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255),random(255),random(255))
  //  this.mainBall = createVector(x, y)

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


  }
  update(){

    var distToMainBall;
    if (this.id>=0){ //Attract and repel
      distToMainBall = this.loc.dist(mainBall.loc)
      if(distToMainBall < 250){
        this.acc = p5.Vector.sub(mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1)
      }
      if (distToMainBall<150){
        this.acc = p5.Vector.sub(this.loc, mainBall.loc );
        this.acc.normalize();
        this.acc.mult(0.5);
        this.vel.limit(3)
      }
      this.vel.add(this.acc)
      this.loc.add(this.vel)
    }



  }
  render(){
    if (this.id>=0){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 20,20)
      this.id++
    }
    if(this.id<0){
      fill(250,0,0)
      ellipse(this.loc.x, this.loc.y, 50, 50)
      this.loc.add(this.vel)
    }
  }

}
