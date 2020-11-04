  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world,can1,can2,can3,can4,can5,can6,can7,can9,can10,can11,can12,can13,can14,can15;
var ball,chain,platform,ground;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;
    ball=new Ball(250,175,25)
    chain=new Chain(ball.body,{x:250,y:350})
    platform=new Base(1200,696.25,225,10)
    ground=new Base(800,795,1600,10)
    //1st floor
    can1 = new Can(1200,320,45,82.5);
    //2nd floor
    can2 = new Can(1177.5,402.5,45,82.5);
    can3 = new Can(1222.5,402.5,45,82.5);
    //3rd 55
    can4 = new Can(1155,485,45,82.5);
    can5 = new Can(1200,485,45,82.5);
    can6 = new Can(1245,485,45,82.5);
    //4th floor
    can7 = new Can(1132.5,567.5,45,82.5);
    can8 =new Can(1177.5,567.5,45,82.5);
    can9 = new Can(1222.5,567.5,45,82.5);
    can10= new Can(1267.5,567.5,45,82.5);
    //5th floor
    can11= new Can(1110,650,45,82.5);
    can12= new Can(1155,650,45,82.5);
    can13=new Can(1200,650,45,82.5) 
    can14=new Can(1245,650,45,82.5)
    can15=new Can(1290,650,45,82.5)
}

function draw(){
    background(129, 66, 245);
    Engine.update(engine);
   textSize(50)
    stroke("black")
    strokeWeight(3)
    fill("white") 
    textFont("Colonna mt")
    text("Press space to get second chance",200,150)
    can1.display();
    can2.display();
    can3.display();
    can4.display();
    can5.display();
    can6.display();
    can7.display();
    can8.display();
    can9.display();
    can10.display();
    can11.display();
    can12.display();
    can13.display();
    can14.display();
    can15.display();
  
    chain.display()
    ball.display()
    platform.display()
    ground.display()
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
        
    }
    function mouseReleased(){
        chain.release()
    }
    function keyPressed(){


        if(keyCode===32){
     Matter.Body.setPosition(ball.body,{x:250,y:350})
     chain.attach(ball.body)
        }}
