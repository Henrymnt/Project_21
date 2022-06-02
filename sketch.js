
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100,200,20,ball_options)
	World.add(world,ball)
	
	groundObj = new Ground(400,390,800,10);
	leftSide = new Ground(400,350,10,100);
	rightSide = new Ground(600,350,10,100);

	pos = ball.position
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIANS)
  background(0);
  fill("white")
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 



  groundObj.display();
  leftSide.display();
  rightSide.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:50,y:-50})
	}	
}


