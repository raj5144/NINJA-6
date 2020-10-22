const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas, backgroundImage,gameState2,axe;

//var gameState = 0;
//var playerCount;
//var allPlayers;
//var distance = 0;
//var database;
var start,edges;
var form, player,skeleton1,Ninja2
var game,playerattack,health;
var base;
var playerimg,backgroundimg;
var skeleton1img,groundimg;
var playerrunning,playerLeft;
var LeftStand,skeletonhurt;
var skeletonLeft,skeletonhurtleft;
var ThemeSound,HitSound,health2;
var shop,tag,shoptag;
var MoveSound,Ninjutsu;
var shurikan,shurikanimg,gamestate;
var sprite1,sprite2,sprite3,sprite4;
var Ninja2Attack,Ninja2health;
var Ninja2Right,Ninja2Left,Ninja2img;
var mouse,lives;


function preload(){

  ThemeSound = loadSound('Main.mp3');
  HitSound = loadSound('Hit.mp3');
  MoveSound = loadSound('rasengan.mp3');
 // wall_hitSound = loadSound('wall_hit.mp3');
 // hitSound = loadSound('hit.mp3');

  playerimg=loadImage("images/PicsArt_08-25-11.41.36.png")
 
  playerrunning=loadAnimation("NinjaRight1.png","NinjaRight2.png","NinjaRight3.png")
  playerLeft=loadAnimation("NinjaLeft1.png","NinjaLeft2.png","NinjaLeft3.png")
  playerattack=loadAnimation("ninja_attack.png")

  Ninja2img=loadImage("images/Ninja2left.png")
  StartImg=loadImage("images/start.png")
  StartImg2=loadImage("images/sstartt.png")
  Ninja2Right=loadAnimation("Ninja2Right1.png","Ninja2Right2.png","NinjaRight3.png")
  Ninja2Left=loadAnimation("Ninja2Left1.png","Ninja2Left2.png","Ninja2Left3.png")
  Ninja2Attack=loadImage("images/Ninja2Attackleft.png")

  backgroundimg=loadImage("images/middlewallupdated.png")
  skeleton1img=loadImage("images/PicsArt_08-25-10.15.33.png")
  groundimg=loadImage("images/background2.jpg")
  LeftStand=loadImage("images/LeftStand.png")
  skeletonhurt=loadImage("images/skeleton.png")
  skeletonLeft=loadImage("images/skeletonLeft.png")
  skeletonhurtleft=loadImage("images/skeletonLefthurt.png")
  shoptag =loadImage("images/shop.png")
  shurikanimg =loadAnimation("images/shurikan2.gif")
  
}
//hitSound.play();
function setup(){



 canvas = createCanvas(displayWidth , displayHeight-145);
 background("yellow");
 Ninjutsu = 1000;
 lives= 3;


 start = createSprite(700,300);
 //mouse = createSprite(mouse.x,mouse.y,20,20);

 axe = createSprite(3333333,444444);
 start.addImage("START",StartImg2);
 textSize(30);
 text("PRESS 'SPACEBAR' TO START ",500,350);
  start.scale=0.4;
  start.visible=0;

 // database = firebase.database();
 game = new Game();  

 // game.getState();
 if(gamestate===1){
 game.start();
 }
if(gamestate===2){
   gameState2.start();
 }
}

 
    

  


function draw(){

if(keyWentDown(32) && axe.x === 3333333 ){
  axe.x = 100000;
}

if(axe.x===100000){
  gamestate = 1;
  start.destroy();
  game.start();
  console.log("Something");
  axe.x= 99999999;
}
 
 // }

  if(gamestate===1){
    game.play();
   
 }
 else if(gamestate===2){
    base.play();
  }
 // if(gameState === 1){
   // clear();
   // game.play();
 // }
 drawSprites();
}





