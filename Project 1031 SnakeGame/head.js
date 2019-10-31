class Head{
  constructor(x,y,vel){
    this.x = x
    this.y = y
    this.vel = vel
  }

    update(){
      if keyPressed()
      this.x++
    }

    render(){
      fill(0,250,0)
      rect(this.x, this.y, 20, 20)
    }

    run(){
      this.update();
      this.render();
    }

}
