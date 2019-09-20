

class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,1)
    this.clr = color(random(255),random(255),random(255));
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
     if(this.loc.y>paddle.loc.y&&paddle.loc.x<this.loc.x&&this.loc.x<paddle.loc.x+200&&this.vel.y>0&&this.loc.y<paddle.loc.y+50){
       this.vel.y = -this.vel.y
       score++
     }

  }
  update(){
      this.vel.add(this.acc)
      this.loc.add(this.vel)
    }

  render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y,20,20)


  }

}
