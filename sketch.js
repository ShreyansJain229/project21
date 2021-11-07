const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj, leftside, rightside;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  groundObj = new Ground(width/2,670,width,20);
  leftside = new Ground(1100,600,20,120);
  rightside = new Ground(1300,600,20,120);

	var ball_options = {
	  isStatic: false,
		restitution: 0.3,
    friction: 0,
    density: 1.2
	}

	ball = Bodies.circle(200,20,20,ball_options);

  World.add(world,ball);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20,20);
  
  if(keyWentDown(UP_ARROW)){
    keypressed();
  }

  groundObj.display();
  leftside.display();
  rightside.display();

  Engine.update(engine);
}

function keypressed() {
  Matter.Body.applyForce(ball,ball.position,{x:80,y:-100});
}
