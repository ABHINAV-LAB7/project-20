var car,wall;
var speed,weight;





function setup() {
  createCanvas(400,1200);

  speed=random(55,90);
  weight=random(400,1500);

  wall1.createSprite(1500,200,60,height/2);
  wall1.shapeColour(black);

  car1=createSprite(50, 200, 50, 50);
  car1.shapeColour(white);

  car2=createSprite(50, 500, 50, 50);
  car2.shapeColour(yellow);

  car3=createSprite(50, 800, 50, 50);
  car3.shapeColour(red);

  car4=createSprite(50, 1100, 50, 50);
  car4.shapeColour(green);

  

  

  



}

function draw() {
  background(0);  

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight *  speed  * speed/22509;
    if(deformation>180)
    {
      car.shapeColour=colour(255,0,0);
    }
  if(deformation<180 && deformation>100)
  {
    car.shapeColour=colour(230,230,0);
  }
  if(deformation<100)
  {
    car.shapeColour=colour(0,255,0);
  }
  }
   drawSprites();
}