
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95, //elastica
    frictionAir:0.01 //atrito com o ar
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  //ball

  //ground
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

 //mostrar ball e ground
 


  
  
}

