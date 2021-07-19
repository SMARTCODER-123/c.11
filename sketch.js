var trex, trex_running, edges;
var groundImage;
var ground;
var invisibleGround;

function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png")
}

function setup(){
    createCanvas(600,200);
    
    // creating trex
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);

    //creating the edges
    edges = createEdgeSprites();
    
    //adding scale and position to trex
    trex.scale = 0.5;
    trex.x = 50

    //creating the ground
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage)
    ground.velocityX = -4;

    //creating an invisible ground;
    invisibleGround = createSprite (200,190,400,10);
    invisibleGround.visible = false;
}


function draw(){
    //set background color 
    background("white");
    
    //logging the y position of the trex
    console.log(trex.y)
    
    //jump when space key is pressed
    if(keyDown("space") && trex.y >= 150.75){

      trex.velocityY = -10;
    }
    
    //Add the gravity
    trex.velocityY = trex.velocityY + 0.5;

    // Infinite Scrolling ground
    if(ground.x < 0) {
      ground.x = ground.width/2
    }
    
    //stop trex from falling down
    trex.collide(invisibleGround)
    drawSprites();
}