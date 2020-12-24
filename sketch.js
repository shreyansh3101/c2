
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var ground,Paper,d1,d2,d3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(width/2,670,width,20)
	Paper=new paper(200,450,10)
	d1=new dustbin(555,635,10,60)
	d2=new dustbin(645,635,10,60)
	d3=new dustbin(600,670,100,10)

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 800,
		  height: 700,
		  wireframes: false
		}
	  });
  
  
}


function draw() {

  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();
  Paper.display();
  d1.display();
  d2.display();
  d3.display();
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(Paper.body,Paper.body.position, {x:2,y:-5})

	}


}

