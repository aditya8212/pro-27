
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1,chain1,bob1,bob2,bob3,bob4,bob5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	roof1 = new ROOF();
	bob1 = new BOB(200);
	bob2 = new BOB(260);
	bob3 = new BOB(320);
	bob4 = new BOB(380);
	bob5 = new BOB(440);

	chain1 = new CHAIN1(bob1.body,roof1.body);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  chain1.display();
}



