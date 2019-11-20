class Head{
  constructor(x,y){
    this.x = x
    this.y = y
  }

  checkEdges(){
    if (body.length>=1){
      for (i = body.length-1; i>=0; i--){
        if (this.x === body[i].x && this.y === body[i].y ){ //if head loc === body loc
          if (this.x != body[1].x || this.y != body[1].y){ //head cannot be killed by hitting the second body segment in the array
              screenNumber++
            }
          }
        }
      }
    if (this.x >= width || this.x < 0 || this.y >= height || this.y < 0){ //if the head hits the edge of the screen
      screenNumber++
    }
  }

    render(){
      fill(100,250,100)
      rect(this.x, this.y, 20, 20)
    }

  run(){
      this.checkEdges()
      this.render()
    }
}
