const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops = [];
var rand;
var thunder;

function preload(){
    thunder1 = loadImage("1.png")
    thunder2 = loadImage("2.png")
    thunder3 = loadImage("3.png")
    thunder4 = loadImage("4.png")
}

function setup(){
  createCanvas(400, 700);
    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){
        for(var i = 0; i<maxDrops; i++){
            drops.push(new Drops(random(0, 400), random(0, 400)));
        }
    }

    umbrella = new Umbrella(200, 550);
}

function draw(){
    background(0);
    Engine.update(engine);

    rand = Math.round(random(1, 4))
        thunder = createSprite(200, 200, 10, 10);
        console.log("hey");
        switch(rand){
            case 1 : thunder.addImage(thunder1);
            break;
            case 2 : thunder.addImage(thunder2);
            break;
            case 3 : thunder.addImage(thunder3);
            break;
            case 4 : thunder.addImage(thunder4);
            break;
            default : break;
        }

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    umbrella.display();
}   
