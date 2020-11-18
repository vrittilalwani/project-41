
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var umbrella,drop;

function preload(){
    
}

function setup(){
    createCanvas(800, 700);
engine = Engine.create();
world = engine.world;

umbrella = new Umbrella(100,20,50,25);
drop= new Drops(100,25,45,125);

Engine.run(engine);
     
}

function draw(){

 umbrella.display();
 drop.display();
 
}
 if (frameCount % 20 === 0) {
    thunder = createSprite(random(100, 1000), 0, 100, 100);
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: thunder.addImage("1.png");
        break;
        case 2: thunder.addImage("2.png");
        break;
        case 3: thunder.addImage("3.png");
        break;
        case 4: thunder.addImage("4.png");
        break;
    }
    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
    
   
}   
