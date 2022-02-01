var path,pinguino, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var fondo, fondoImg;
var pinguino,pinguinoImg;
var iceGroup;
var ninoGroup;
var iceImg;
var niñoImg;
var gameState="play";
var score=0;

function preload(){
  fondoImg = loadImage("imagenes/track.png");
  pinguinoImg = loadImage("imagenes/p1.png");
  iceImg = loadImage("imagenes/Snowball.webp");
  niñoImg = loadImage("imagenes/niño.webp");
}

function setup(){
  
  createCanvas(1230,550);
  
  fondo=createSprite(650,200);
  fondo.addImage(fondoImg);
  fondo.scale=1.5;
  
    pinguino=createSprite(500,300,20,20);
    pinguino.addImage(pinguinoImg);
    pinguino.scale= 0.2;
  
    iceGroup= new Group();
    ninoGroup= new Group();
  
//crea el Límite izquierdo
leftBoundary=createSprite(1220,0,20,1000);
//leftBoundary.visible = false;
leftBoundary.shapeColor="red"

//crea el Límite derecho
rightBoundary=createSprite(10,0,20,1000);
rightBoundary.shapeColor="red"

//rightBoundary.visible = false;
}

function draw() {
  background(255);
  fondo.velocityY=4;

  if(gameState="play"){
    if(keyDown("LEFT_ARROW")) {
      pinguino.x=pinguino.x-5;
    }
    if(keyDown("RIGHT_ARROW")) {
      pinguino.x=pinguino.x+5;
    } 
    
    edges= createEdgeSprites();
    pinguino.collide(edges[3]);
    pinguino.collide(leftBoundary);
    pinguino.collide(rightBoundary);
    pinguino.collide(iceGroup);
  
  
    if(pinguino.collide(iceGroup)){
    score=score-1;
    }
      
  
  
    if (World.frameCount % 100 == 0) {
      iceBlock();
  
    }
  
    if (World.frameCount % 200 == 0) {
      ninos();
    }
    
    //código para reiniciar el fondo
    if(fondo.y > 320 ){
      fondo.y = height/2;
    }
  }

  if (gameState="end"){
  restart();
  }
  
  
  
  drawSprites();
}

function iceBlock(){
  var ice=createSprite(Math.round(random(50,1200)),100,40,20);
  ice.addImage(iceImg);
  ice.scale=0.5;
  ice.setLifetime=170;
  ice.velocityY=5;
  iceGroup.add(ice);
  
  
  

}

function ninos(){
  var nino=createSprite(Math.round(random(50,1200)),500,40,40);
  nino.addImage(niñoImg);
  nino.scale=0.5;
  nino.setLifetime=170;
  nino.velocityY=-3;
  ninoGroup.add(nino);
 
}

function restart(){
gameState="play";
//iceGroup.destroyEach();
//ninoGroup.destroyEach();

}