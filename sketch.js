const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, box, bottle,mouse,clip;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1= new Box(140,25,20,20)
   
mouse = new Box(350,50,20,15)

clip = new Cube(230,10,10,18)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    mouse.display()
    clip.display()
}