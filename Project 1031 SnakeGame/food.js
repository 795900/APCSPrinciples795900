class Food{
  constructor(x,y){
    this.foodX = x
    this.foodY = y
  }


  run(){
    this.update()
    this.render()
  }

  update(){
    if (xSquare === this.foodX && this.foodY === ySquare){
      this.foodX = round(random(width/20-1))
      this.foodY = round(random(width/20-1))
    }
  }
  render(){
    fill(250,0,0)
    rect(this.foodX*20, this.foodY*20, 20, 20)
  }
}
