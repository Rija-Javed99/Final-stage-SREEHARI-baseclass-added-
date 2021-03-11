const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7
var ground, crown;
var gem1, gem2, gem3;
var score = 0
var playerStand;

function setup(){
    var canvas = createCanvas(1350,640);
    engine = Engine.create();
    world = engine.world;

    crown = new Crown(1305,580)
   ground = new Ground(680,620)
   playerStand=new Player(60,560)
   obstacle2 = new Obstacle(733,410,250,25)
   obstacle3 = new Obstacle(270,363,250,25)
   obstacle4 = new Obstacle(1008,194,130,25)
   obstacle5 = new Obstacle(700,600,250,25)
   obstacle6 = new Obstacle(1130,100,140,25)
   obstacle7 = new Obstacle(900,700,250,150)
   
   //new obstacles created below
   obstacle8 = new Obstacle(740,100,25,150)
   obstacle9 = new Obstacle(845,358,25, 130)
   obstacle10 = new Obstacle(1060, 130,25,150)
   obstacle11= new Obstacle(970, 390, 25,150)
   obstacle12= new Obstacle(803, 165, 150,25)
   obstacle13= new Obstacle(1033, 460, 150,25)
   obstacle14= new Obstacle(180, 105, 150,25)
   obstacle15= new Obstacle(415, 103, 150,25)
   obstacle16= new Obstacle(515, 215, 150,25)
   obstacle17= new Obstacle(1200, 240, 25,120)
   obstacle18= new Obstacle(1253, 290, 130,25)

   obstacle19= new Obstacle(578,170, 25, 70)
   obstacle20= new Obstacle(700,548, 25, 80)
   obstacle21= new Obstacle(260,300, 25, 130)
   obstacle22= new Obstacle(100,100, 25, 130)

   obstacle23= new Obstacle(250,560,100,25)
   obstacle24= new Obstacle(290,523,25,100)
   obstacle25= new Obstacle(345,484,130,25)

   obstacle26= new Obstacle(569,315,160,25)
   obstacle27= new Obstacle(1200,530, 100,25)
   obstacle28= new Obstacle(1163,575, 25, 100)

   //create gems

   gem1= new Gem(210,320)
   gem2= new Gem(130,60)
   gem3= new Gem(520,160)
   gem4= new Gem(290,320)
   gem5= new Gem(240,520)
   gem6= new Gem(790,360)
   gem7= new Gem(730,555)
   gem8= new Gem(770,120)
   gem9= new Gem(1240,240)

   gem10= new Gem(190,65)
   gem11= new Gem(405,55)
   gem12= new Gem(1010,150)
   gem13= new Gem(1090,55)
   gem14= new Gem(1000,405)
   gem15= new Gem(700,360)
   gem16= new Gem(640,550)
   gem17= new Gem(1200,590)
   gem18= new Gem(1155,50)
   gem19= new Gem(560,265)
   gem20= new Gem(720,370)
   gem21= new Gem(1065,420)
   gem22= new Gem(832,120)
   gem23= new Gem(320,430)
   gem24= new Gem(370,440)


}
function draw(){
    background("lightBlue");
    textSize(25)
    fill("lightBlue")
    strokeWeight(4)
    stroke("blue")
    text("Score: " + score,1210,28)
    //mousePosition
    noStroke()
    textSize(13);
    fill("black")
    text(mouseX+","+mouseY, mouseX, mouseY)
    Engine.update(engine);
    crown.display();
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
    obstacle6.display();
    obstacle7.display();

    obstacle8.display();
    obstacle9.display();
    obstacle10.display();
    obstacle11.display();

    obstacle12.display();
    obstacle13.display();
    obstacle14.display();
    obstacle15.display();
    obstacle16.display();
    obstacle17.display();
    obstacle18.display();

    obstacle19.display();
    obstacle20.display();
    obstacle21.display();
    obstacle22.display();

    obstacle23.display();
    obstacle24.display();
    obstacle25.display();
    obstacle26.display();
    obstacle27.display();
    obstacle28.display();

    gem1.display();
    gem2.display();
    gem3.display();
    gem4.display();
    gem5.display();
    gem6.display();
    gem6.display();
    gem7.display();
    gem8.display();
    gem9.display();

    gem10.display();
    gem11.display();
    gem12.display();
    gem13.display();
    gem14.display();
    gem15.display();
    gem16.display();
    gem17.display();
    gem18.display();
    gem19.display();
    gem20.display();
    gem21.display();
    gem22.display();
    gem23.display();
    gem24.display();

    gem1.score();
    gem2.score();
    gem3.score();
    gem4.score();
    gem5.score();
    gem6.score();
    gem7.score();
    gem8.score();
    gem9.score();
    gem10.score();
    gem11.score();
    gem12.score();
    gem13.score();
    gem14.score();
    gem15.score();
    gem16.score();
    gem17.score();
    gem18.score();
    gem19.score();
    gem20.score();
    gem21.score();
    gem22.score();
    gem23.score();
    gem24.score();


    playerStand.display();
    ground.display();
   
}

    function keyPressed() {
        if (keyCode === UP_ARROW) {
          Matter.Body.applyForce(playerStand.body,playerStand.body.position,{x:0,y:-105});
        }
        
        if (keyCode === RIGHT_ARROW) {
            Matter.Body.applyForce(playerStand.body,playerStand.body.position,{x:100,y:0});
          }  
          if (keyCode === LEFT_ARROW) {
            Matter.Body.applyForce(playerStand.body,playerStand.body.position,{x:-100,y:0});
          }
  
  
  
  


}


