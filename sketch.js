var path;



function preload(){
  pathImg=loadImage("path.png");
  RunnerImg=loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;


  Runner=createSprite(200,200,100,100);
  Runner.addAnimation("Running", RunnerImg);
  Runner.scale = 0.08;
  leftB=createSprite(5,200,50,400)
  leftB.visible=false;
  rightB=createSprite(395,200,50,400);
  rightB.visible=false;

}

function draw() {
  background(0);
  
 
 

 Runner.x = World.mouseX;
edges = createEdgeSprites();
Runner.collide(edges);

  Runner.collide(leftB);
  Runner.collide(rightB);



  if(path.y > 400 ){
    path.y = height/2;
    }


  drawSprites();
  





}
