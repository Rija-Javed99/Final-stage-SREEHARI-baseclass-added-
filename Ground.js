class Ground {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("images/ground.png")
      this.body = Bodies.rectangle(x,y,1550,20,options);
      this.width = 1550;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    push()
      imageMode(CENTER)
      image(this.image,660,634,this.width,this.height)
    pop()
    
  }
}