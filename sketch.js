const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
    createCanvas(1100,700);

	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height-650,350,20)
	
	bob1=new Bob(width-620,height-250,30,30)
	bob2=new Bob(width-560,height-250,30,30)
	bob3=new Bob(width-500,height-250,30,30)
	bob4=new Bob(width-440,height-250,30,30)
	bob5=new Bob(width-380,height-250,30,30)

	rope1=new Rope(roof.body,bob1.body,-125)
	rope2=new Rope(roof.body,bob2.body,-65)
	rope3=new Rope(roof.body,bob3.body,-5)
	rope4=new Rope(roof.body,bob4.body,55)
	rope5=new Rope(roof.body,bob5.body,110)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(128,0,128);
  textSize(50)
  fill("white")
  text("Newton's Cradle",width/2-170,height-150)

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1.5,y:-1.5})
}
} 