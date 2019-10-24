class Rectangle{
  constructor(heightOfRect,loc,widthOfRect){
    this.height = heightOfRect
    this.loc = loc
    this.width = widthOfRect
  }
  render(){
    fill(250,0,0)
    rect(this.loc,height - this.height,this.width,this.height)
  }
}
