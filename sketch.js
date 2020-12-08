var speed 
var weight
var bullet
var wall
var thickness

function setup() {
  createCanvas(1600,400);
  speed = random (223, 321)
  weight = random (30,52)
  thickness = random (22,83)
  bullet = createSprite(50, 200, 30, 50);
  bullet.velocityX = speed 
  wall = createSprite(1000, 200, thickness, height/2)

}

function draw() {
  background(0);  
  collided(wall,bullet);

  drawSprites();
}
function collided(lwall,lbullet){
  if(lwall.x - lbullet.x <= lwall.width/2 + lbullet.width/2){
    lbullet.velocityX = 0
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage < 10)
    lwall.shapeColor = "green"
    else
    lwall.shapeColor = "red"
}
}
