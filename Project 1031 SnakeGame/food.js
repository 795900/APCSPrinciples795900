class Food{
  constructor(x,y){
    this.x = x
    this.y = y
  }


  run(){
    this.update()
    this.render()
  }

  update(){
    if (xSquare === this.x && this.y === ySquare){
      this.x = round(random(width/20-1))
      this.y = round(random(width/20-1))
    }
  }
  render(){
    fill(250,0,0)
    rect(this.x*20, this.y*20, 20, 20)
  }
}
