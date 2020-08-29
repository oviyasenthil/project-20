var car1,car2,car3,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car1 = createSprite(50,100,50,50);
  car1.velocityX = speed;
  car1.shapeColor = color("yellow");

  
  car2 = createSprite(50,200,50,50);
  car2.velocityX = speed;
  car2.shapeColor = color("red");

  
  car3 = createSprite(50,300,50,50);
  car3.velocityX = speed;
  car3.shapeColor = color("blue");

  wall = createSprite(1200,200,60,300);
  wall.shapeColor = color(255,255,255);

  
}

function draw() {

  background(0,0,0); 

  
  
  if((wall.x - car1.x) <(car1.width + wall.width)/2)
  {
    car1.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation > 180)
    {
      car1.shapeColor = color(250,0,0);
    }
    
    if(deformation < 180 && deformation > 100)
    {
      car1.shapeColor = color(230,230,0);
    }

    if(deformation < 100 )
    {
      car1.shapeColor = color(0,255,0);
    }
  }

  if((wall.x - car2.x) <(car2.width + wall.width)/2)
  {
    car2.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation > 180)
    {
      car2.shapeColor = color("grey");
    }
    
    if(deformation < 180 && deformation > 100)
    {
      car2.shapeColor = color("green");
    }

    if(deformation < 100 )
    {
      car2.shapeColor = color("purple");
    }
  }

  if((wall.x - car3.x) <(car3.width + wall.width)/2)
  {
    car3.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation > 180)
    {
      car3.shapeColor = color("green");
    }
    
    if(deformation < 180 && deformation > 100)
    {
      car3.shapeColor = color("brown");
    }

    if(deformation < 100 )
    {
      car3.shapeColor = color("grey");
    }
  }
  drawSprites();
  
}