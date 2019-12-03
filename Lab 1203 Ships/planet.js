class Planet{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255),random(255),random(255))

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
      this.vel.add(this.acc)
      this.loc.add(this.vel)
      if (ship.loc.x < this.loc.x+100 && ship.loc.y < this.loc.y+100 && ship.loc.x > this.loc.x-100 && ship.loc.y > this.loc.y-100){
        this.loc.x = random(width)
        this.loc.y = random(height)
      }
    }




  render(){
      fill(250,0,0)
      ellipse(this.loc.x, this.loc.y, 50, 50)
      this.loc.add(this.vel)


}
}
