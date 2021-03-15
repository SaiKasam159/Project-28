
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground,paper

function preload()
{
	dustbinImage = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	box1=new Box(860,610,10,158)
	box2=new Box(1000,610,10,158)
	box3=new Box(930,670,150,10)
	paper=new Paper(80,590,20)
	slingshot = new SlingShot(paper.body, {x:100, y:100})

	Engine.run(engine);
	
  
}


function draw() {
  background(300);
  ground.display() 
  paper.display() 
  box1.display()
  box2.display()
  box3.display1() 
  
  slingshot.display()



  
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:62,y:-125});
	}
}

function mouseDragged(){

	Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
	slingshot.fly()
}
