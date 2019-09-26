//Harry Kraus
//9/25

class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx,dy);
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
     if(this.loc.y>paddle.loc.y&&paddle.loc.x<this.loc.x&&this.loc.x<paddle.loc.x+100&&this.vel.y>0&&this.loc.y<paddle.loc.y+50){
       this.vel.y = -this.vel.y
       score++
     }
     for(var i = balls.length-1; i>=0; i--){
       if(balls[i].isColliding()){
         append(balls,i)
         health--
       }
     }

  }
  update(){
      this.loc.add(this.vel)
    }

  render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y,20,20)
  }
  isColliding(){
    if(paddle.loc.x<this.loc.x&&this.loc.x<paddle.loc.x+100&&this.vel.y<0&&this.loc.y<paddle.loc.y+50&&this.loc.y>paddle.loc.y+20){
        return true
    }
  }
}
