class Gem extends BaseClass{
    constructor(x, y) {
        super(x,y,40,40)
        this.image= loadImage("images/gem.png")
        this.Visiblity=255;
    }
    display(){
     
      if(this.body.speed <3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 254;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
     }
   
     score(){
       if (this.Visiblity < 0 && this.Visiblity > -1005){
         score++;
       }
      }
    };