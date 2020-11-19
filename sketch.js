
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3 
var Ground 
var Ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball = new ball(100,350)
	Ground = new ground(400,650,900,20)
	wall1 = new wall(650,550,20,80)
	//wall2 = new wall(700,600,20,80)
	//wall3 = new wall(625,630,162,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Ball.display()
  Ground.display()
  wall1.display()
  //wall2.display()
  //wall3.display()
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(Ball.body,Ball.body.position,{x:55,y:-144})
	}
}

