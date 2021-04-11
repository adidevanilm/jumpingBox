var canvas;
var song;
var block1, block2, block3, block4;
var ball;
var wall1, wall2, wall3;
var wallg;

function preload(){
    song = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800, 600);
    song.play();
     wallg = new Group();
    //create 4 different surfaces
     block1 = createSprite(110, 560, 175, 40);
              block1.shapeColor = "blue";

     block2 = createSprite(300, 560, 170, 40);
              block2.shapeColor = "orange";

     block3 = createSprite(490, 560, 170, 40);
              block3.shapeColor = "purple";

     block4 = createSprite(680, 560, 175, 40);
              block4.shapeColor = "darkgreen";

     ball   = createSprite(random(20,750), 100, 50, 50);
              ball.shapeColor = "white";

     wall1  = createSprite(400, 10, 800, 20)
              wallg.add(wall1);
     wall2  = createSprite(10, 300, 20, 600)
              wallg.add(wall2);
     wall3  = createSprite(790, 300, 20, 600)
              wallg.add(wall3);
            


    //create box sprite and give velocity
  ball.velocityX = -1.5;
  ball.velocityY = 3;
}

function draw() {
    background(rgb(169,169,169));
  
   ball.bounceOff(wallg);


     if (block1.isTouching(ball) && ball.bounceOff(block1)){
     ball.shapeColor = "blue";
    
  }

    if (block2.isTouching(ball) ){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
     //   song.stop();
    }

    if (block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "purple";
     }
     


    //add condition to check if box touching surface and make it box
    drawSprites();
}
