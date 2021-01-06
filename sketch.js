
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var roof;
var chain1, chain2, chain3, chain4, chain5;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

ball1 = new ball(200,600);
ball2 = new ball(300,600);
ball3 = new ball(400,600);
ball4 = new ball(500,600);
ball5 = new ball(600,600);
roof = new pendulamHolder(400,100,width,50);

chain1 = new chain(ball1.body,{x: 200,y: 400});
chain2 = new chain(ball2.body,{x: 300,y: 400});
chain3 = new chain(ball3.body,{x: 400,y: 400});
chain4 = new chain(ball4.body,{x: 500,y: 400});
chain5 = new chain(ball5.body,{x: 600,y: 400});

}


function draw() {
  background(0);
  Engine.update(engine);
  //drawSprites();

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
roof.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display(); 

start(ball1.body);
}

function start(bob){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(bob.body,bob.body.position,{x:50,y:450});
}
}

function mouseDragged(){
	
	//Matter.Body.setPosition(ball1.body,{x: mouseX,y: mouseY});
	Matter.Body.setPosition(ball5.body,{x: mouseX,y: mouseY});
}