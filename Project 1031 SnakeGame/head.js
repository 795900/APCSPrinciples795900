class Head{
  constructor(x,y){
    this.x = x
    this.y = y
  }

  checkEdges(){
    for (i = body.length-1; i<=0; i--){
      if (this.x === body[i].x && this.y === body[i].y){
        console.log("working")
      }
    }
  }

    render(){
      fill(100,250,100)
      rect(this.x, this.y, 20, 20)
    }
}

  run(){
      this.checkEdges()
      this.render()
    }
