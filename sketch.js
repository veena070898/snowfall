const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var snowImg;
var bgimg,girl,girlimg;
var particles=[];


function preload(){
  bgimg=loadImage("snow1.jpg")
  girlimg=loadImage("GIRL.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

   
  girl=createSprite(200,200,10,10);
  girl.addImage(girlimg)
  girl.scale=0.3;
  
}

function draw() {
  background(bgimg); 
  Engine.update(engine);
  if(frameCount%30===0){
    particles.push(new Particle(random(200,400), 10,10));
   
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display()
 }
 drawSprites();
}
