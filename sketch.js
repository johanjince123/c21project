var ground,right,left,ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		restitution:0.3,
        isStatic:false ,
	    friction:0,
		destiny:1.2,
		}

	ball = Bodies.circle(100,100,10,ball_options)
	World.add(world,ball)
    ground = new  Ground(750,670,1500,20)
	left = new  Ground(1100,600,20,120)
	right = new  Ground(1400,600,20,120)

	Engine.run(engine);	
}
function draw() {
 
  background(0);
  Engine.update(engine)
  ellipse(ball.postion.x,ball.postion.y,10)

  ground.display()
  left.display()
  right.display()

}
function keypressed() {
	if (keycode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
	}
}