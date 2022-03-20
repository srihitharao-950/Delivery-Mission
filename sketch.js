var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {

    
  iss = createSprite(330,130);
  iss.addImage(issimg);
  createCanvas(600, 350);
  spacecraft = createSprite(100,50);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.25;

 
}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){

  
     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -10;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 10;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 10;
  }
    
  if(keyDown("DOWN_ARROW")){
    spacecraft.y = spacecraft.y +10;
     
  }
}

   if(spacecraft.y >= (x=230) && spacecraft.x >= (x=10)){
     hasDocked = true;
     textSize(25);
  fill("pink")

    text("Delivery Successful!", 200, 300);
   }

  drawSprites();
}

