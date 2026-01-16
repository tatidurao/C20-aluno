
onst Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall, wedge
var angle=60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,// //é quanto ela ira quicar (elastica) quanto > mais saltitante
    frictionAir:0.01 //quanto > atrito do ar > + lento sera o movimento da bola
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  //wall, wedge
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  //definir propriedades
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  //mostrar
 


  
  
}
