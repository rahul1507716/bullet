var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = Math.random(22,83);
  speed = Math.random(223,321);
 weight = Math.random(30,52);
 bullet = createSprite(50, 200, 50, 20);
 bullet.velocityX = speed;
 bullet.shapeColor = "white";
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = "yellow";
}

function draw() {
  background("black");
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage > 10)
  {
    wall.shapeColor = (255,0,0);
  }
    
    if (damage < 10){
      wall.shapeColor = (0,255,0);
    }

  }  
  drawSprites();
}

function hasCollided(lbullet,lwall){
 bulletRightEdge = lbullet.x + bullet.width;
 wallLeftEdge = lwall.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
   return true
 }
 return false;
}