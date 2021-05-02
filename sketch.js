const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg = "noon.png"
var backgroundImg;
function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;
 

  ground = new Ground(600,height,2500,20);

  ground2 = new Ground(800,600,300,20);
  
  b1 = new Box(875,560,70,70)
  b2 = new Box(800,560,70,70)
  b3 = new Box(725,560,70,70)

  b4 = new Box(840,510,70,70)
  b5 = new Box(760,510,70,70)
  b6 = new Box(800,470,70,70)

  ground3 = new Ground(1400,400,300,20);

  p1 = new Box(1400,350,70,70)
  p2 = new Box(1475,350,70,70)
  p3 = new Box(1325,350,70,70)

  p4 = new Box(1440,310,70,70)
  p5 = new Box(1360,310,70,70)
  p6 = new Box(1400,260,70,70)

  
  bird = new Bird(200,500);
  
  slingshot = new SlingShot(bird.body,{x:200, y:450});
}

function draw() {

  if(backgroundImg)
        background(backgroundImg);

  Engine.update(engine);


  ground.display();
  ground2.display();
  ground3.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  p1.display();
  p2.display();
  p3.display();
 p4.display();
  p5.display();
  p6.display();
  bird.display();
  slingshot.display();    
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(bird.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=04 && hour<=10){
      bg = "morning.jpg";
  }
  if(hour>=12 && hour<=16){
    bg = "noon.png";
}

if(hour>=16 && hour<=19){
  bg = "evening.png";
}

if(hour>=19 && hour<=04){
  bg = "night.png";
}


  backgroundImg = loadImage(bg);
 // console.log(backgroundImg);
}
