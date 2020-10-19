//cREATED a rectangle shape
// Now we will see how we can draw a rectangle using Matter.js

// 3 main things
//Physics Engine- Matter.Engine
//Physical World - Matter.World
//Physical Bodies = Matter. Bodies

//namespace
const ENGINE = Matter.Engine;
const WORLD = Matter.World;
const BODIES = Matter.Bodies;

// create a rectangle - rectangular body
// rectangluar body will be inside a world
// this world will follow the rules of physics - Physics engine


var myEngine,myWorld,myGround,myBall;

function setup() {
  createCanvas(800,400);

  myEngine = ENGINE.create();
  myWorld = myEngine.world;
  myBallBounce={
restitution:50
  }
  myBall=BODIES.circle(300,100,10,myBallBounce);

  var myGroundOptions = {
    isStatic:true
  }

  myGround = BODIES.rectangle(400,380,800,50,myGroundOptions);
  WORLD.add(myWorld,myGround);
  WORLD.add(myWorld,myBall);

  console.log(myGround)
 
}



function draw() {
  background(0); 
  ENGINE.update(myEngine);
  rectMode(CENTER); 
  rect(400,200,50,50);

  rect(myGround.position.x,myGround.position.y,800,50);
  ellipse(myBall.position.x,myBall.position.y,20);

  
}