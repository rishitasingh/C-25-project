var ground
var log1, log2, log3
var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 650, 800, 10);

	log1 = new Log(600, 580, 150, 150);
	

	paper = new Paper(100,200,70);



	Engine.run(engine);
  
}


function draw() {
  
  background(255);

  ground.display();
  paper.display();
  log1.display();
  

 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:250, y: -600});
	}
}



