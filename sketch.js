var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  
  bounceOf(movingRect,fixedRect)
  drawSprites();
}
function bounceOf(A,B){
  if (A.x - B.x < B.width/2 + A.width/2
    && B.x - A.x < B.width/2 + A.width/2) {
  A.velocityX = A.velocityX * (-1);
  B.velocityX = B.velocityX * (-1);
}
if (A.y - B.y < B.height/2 + A.height/2
  && B.y - A.y < B.height/2 + A.height/2){
  A.velocityY = A.velocityY * (-1);
  B.velocityY = B.velocityY * (-1);
  }





}