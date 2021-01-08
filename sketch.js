
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin,paper;	
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	paper=new paper(100,600,10);

	ground=new ground(400,680,800,20);

	hank=new Dustbin(550,620,20,100);
	cherry=new Dustbin(610,660,100,20);
	doc=new Dustbin(670,620,20,100);

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  hank.display();
  cherry.display();
  doc.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}

