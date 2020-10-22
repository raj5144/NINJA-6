class Game {
  constructor(){

  }
  start(){
    ThemeSound.play();
    //ThemeSound.resume();
   Ninja2 = createSprite(5000,2000);
   Ninja2health = createSprite(200,200,90,7);
   Ninja2health.shapeColor= "yellow";

    player = createSprite(200,200);

    

    skeleton1= createSprite(900,200);
   health = createSprite(200,200,90,7);
   shurikan=createSprite(1000,1000,10,10)
   shop = createSprite(780,360,700,500);
   sprite1 = createSprite(550,550,200,100);
   sprite2 = createSprite(550,400,200,100);
   sprite3 = createSprite(550,250,200,100);
   sprite3.shapeColor= "blue";
   sprite2.shapeColor= "red";
   sprite1.shapeColor= "grey";
    shop.shapeColor= "yellow";
    shop.visible = false;
    sprite1.visible = false;
    sprite2.visible = false;
    sprite3.visible = false;
    health.shapeColor= "yellow";
    tag = createSprite(780,140,700,60);
    tag.addImage("SHOP",shoptag)
    tag.shapeColor= "blue";
    tag.visible= false;

   health2 = createSprite(200,200,100,10);
    health2.shapeColor= "green";
    player.addImage("PLAYER",playerimg)
    player.scale = 0.4;
    skeleton1.addImage("ENEMY",skeleton1img)
    skeleton1.addImage("HURT",skeletonhurt)
    skeleton1.addImage("SKLLEFT",skeletonLeft)
    skeleton1.addImage("HURTLEFT",skeletonhurtleft)
    skeleton1.scale = 0.17;
    player.addAnimation("RUN",playerrunning)
    player.addAnimation("RUNLEFT",playerLeft)
    player.addAnimation("ATTACK",playerattack);
    player.addImage("LEFTSTAND",LeftStand);
    

    Ninja2.addImage("NINJA2",Ninja2img)
    Ninja2.addAnimation("RUNRIGHT",Ninja2Right)
    Ninja2.addAnimation("NINJARUNLEFT",Ninja2Left)
    Ninja2.addImage("NINJAATTACK",Ninja2Attack)
    Ninja2.scale = 0.35;

  }
  play(){
    background("white");
    health.x =skeleton1.x-10;
    health.y = skeleton1.y-80;
   
    Ninja2health.x = Ninja2.x-10;
    Ninja2health.y = Ninja2.y-80;

    health2.x = player.x;
    health2.y = player.y-80;

   

  // camera.position.x = displayWidth/2;
   //camera.position.y = player.y;

   if(health.width === 0  ){
      Ninjutsu++;
   }
   
   if(Ninja2health.width === 0  ){
    Ninjutsu++;
  }
  

 if(Ninja2.velocityX <= -1){
   Ninja2.changeAnimation("NINJARUNLEFT",Ninja2Left);
 }
 else if(Ninja2.velocityX <= 1)
 {
   Ninja2.changeAnimation("NINJA2",Ninja2img); 
 }

  if(skeleton1.velocityX <= -1){
    skeleton1.changeAnimation("SKLLEFT",skeletonLeft);
  }
  else if(skeleton1.velocityX <= 1)
  {
    skeleton1.changeAnimation("ENEMY",skeleton1img); 
  }
  player.changeAnimation("PLAYER",playerimg);
  if(keyWentUp(RIGHT_ARROW)){
   player.changeAnimation("PLAYER",playerimg);
  }
  if(keyIsDown(UP_ARROW)){
   player.y -= 10
   player.changeAnimation("RUN",playerrunning);
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y += 10
    player.changeAnimation("RUN",playerrunning);
   }
   if(keyIsDown(RIGHT_ARROW)){
    player.x += 10
    player.changeAnimation("RUN",playerrunning);
   }
   if(keyIsDown(LEFT_ARROW)){
    player.x -= 10
    player.changeAnimation("RUNLEFT",playerLeft);
   }
   if(keyWentUp(LEFT_ARROW)){
    player.changeAnimation("LEFTSTAND",LeftStand);
   }
   
   if(keyWentUp(82)){
    MoveSound.play();
   }
   if(keyWentDown(32)){
      player.changeAnimation("ATTACK",playerattack);
      HitSound.play();
   }
  //console.log(player.x);
  //console.log(player.y);

   if(keyWentDown(83)){

    shop.visible = true;
    tag.visible = true;
    sprite3.visible = true;
    sprite2.visible = true;
    sprite1.visible = true;
   
   }
   if(shop.visible===true){
    textSize(50);
   text("500 NINJUTSU",500,500);
   console.log("Hello");
   }

   if(keyWentDown(67)){
     shop.visible = false;
     sprite3.visible = false;
     sprite2.visible = false;
     sprite1.visible = false;
     tag.visible = false;
  }
  if(keyWentDown(65) ){
    shurikan=createSprite(player.x,player.y,10,10)
    shurikan.shapeColor= "black";
    shurikan.velocityX = 10;
    shurikan.addAnimation("SHURIKEN",shurikanimg);
   
    shurikan.scale=0.2;

  }
   if(keyWentDown(32)  && player.isTouching(skeleton1)){
     skeleton1.changeAnimation("HURT",skeletonhurt);
     health.width -= 10 ;
     Ninjutsu+= 2;
   }
   if(shurikan.isTouching(skeleton1)){
    skeleton1.changeAnimation("HURT",skeletonhurt);
    health.width -= 5 ;
    shurikan.destroy();
    Ninjutsu++;
  }

 
  if(health.width=== -10 || health.width=== -5){
    health.width = 90;
  }
   if(health.width===0){
     skeleton1.x = Math.round(random(500,800))
     skeleton1.y = Math.round(random(100,500))
     skeleton1.velocityX = Math.round(random(-3 || 3))
     skeleton1.velocityY = Math.round(random(-3|| 3))
     health.width = 100;
   }
    if(keyWentDown(32)  && player.isTouching(Ninja2)){
     //skeleton1.changeAnimation("HURT",skeletonhurt);
    Ninja2health.width -= 5 ;
     Ninjutsu+= 6;
   }
  if(shurikan.isTouching(Ninja2)){
    //skeleton1.changeAnimation("HURT",skeletonhurt);
    Ninja2health.width -= 2 ;
    shurikan.destroy();
    Ninjutsu += 2 ;
  }

 
  if(Ninja2health.width=== -10 || Ninja2health.width=== -5){
    Ninja2health.width = 90;
  }
   if(Ninja2health.width===0){
     Ninja2.x = Math.round(random(500,800))
     Ninja2.y = Math.round(random(100,500))
     Ninja2.velocityX = Math.round(random(-3 || 3))
     Ninja2.velocityY = Math.round(random(-3|| 3))
     Ninja2health.width = 100;
   }
   if(lives===0){
    fill("white");
    textSize(80);
    textStyle(BOLD);
    text("YOU LOOSE",500,300);
    player.x=0;
    player.y=0;
    player.visible = 0;
  
  }

   if(mousePressedOver(sprite3) && Ninjutsu >= 500 ){
   health2.width += 20;
   Ninjutsu -= 500;
   }


  
   edges = createEdgeSprites();
 

   player.bounceOff(edges);
   skeleton1.bounceOff(edges);
   Ninja2.bounceOff(edges);



 if(player.y<=90 && Ninjutsu >= 300 && gamestate === 1){
 skeleton1.x= 5000;
 health.x=5000;
 Ninja2.x= 1150;
 Ninja2.y= 200;
  base = new GameState2();
  background("white");
  gamestate=2;
  base.start();

  }
    background(backgroundimg);
 

    fill("black");
    textStyle(BOLD);
    textSize(22);
    text("HELLO , THIS IS PRACTISE MODE AND TUTORIAL , USE SPACEBAR TO ATTACK AND USE ARROW KEYS TO RUN",300,300);
    text("NOW GO TO THE SKELETON AND KILL HIM FOR NINJUTSU",300,350);
    text("AFTER YOU HAVE KILLED THE SKELETON GO TO THE TOP OF THE MAP TO GO TO NEXT ARENA ",300,400);
    text("USE 'S' TO OPEN SHOP AND USE 'C' TO CLOSE SHOP",300,450);
    text("USE 'A' TO THROW SHURIKANS 'R' TO SCREAM ",300,500);
    
    fill("white");
    textSize(20);
    textStyle(BOLD);
    text("Ninjutsu :",80,80);
    text(Ninjutsu,180,80);

    
    fill("black");
    textSize(30);
    textStyle(BOLD);
    text("NEED 300 NINJUTSU TO GO AHEAD",500,85);
    fill("white");
    textSize(20);
    textStyle(BOLD);
    text("LIVES :",1300,80);
    text(lives,1380,80);

    ////image(backgroundimg,0,-displayHeight*1,displayWidth,displayHeight*1)
    drawSprites();
    
    

  

   

}   
  }
