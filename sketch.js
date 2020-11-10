
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var umbrella;

function preload(){
    
}

function setup(){
    createCanvas(800, 700);
engine = Engine.create();
world = engine.world;

umbrella = new Umbrella(100,20,50,25);

Engine.run(engine);
     
}

function draw(){

 umbrella.display();
}   

