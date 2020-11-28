
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper, dustbin;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(160, 640);
	
	ground = new Ground(600,height,1200,20)

	dustbin = new Dustbin(300, 620, 10, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

   paper.display();
   ground.display();
   dustbin.display();

   keyPressed();

   drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	Matter.body.applyForce(paper.Body, paper.Body.position,{x:85, y:-85});
	}
}



