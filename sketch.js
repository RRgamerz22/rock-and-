
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var ball;
var rock;


function setup() {
  createCanvas(400,400);

  my_engine = Engine.create();
  my_world = my_engine.world;
  
  //{ to add set of properties or instructions} properties separated by , and instruction separated by ;
   var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
    
  }
   
   var ground_options ={
     isStatic: true
   };
    
    function setup(){
      frictionAir:0.2
      
    }



  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(my_world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(my_world,ball);
    
  rock = Bodies.circle(100,30,20,rock_options);
  World.add(my_world,rock);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(my_engine);
  
  
 

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(rock.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(rock,{x:0,y:0},{x:0,y:-0.03});
}
  