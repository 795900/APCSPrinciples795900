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
    if (xSquare === this.x && this.y === ySquare){ //changes the location of the food when it is eaten
      this.x = round(random(width/20-1))
      this.y = round(random(width/20-1))
    }
  }
  render(){
    image(img, this.x*20, this.y*20, 20, 20)
  }
}
