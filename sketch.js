var x = 300;
var y = 200;
var speedx = 8;
var speedy = 6;


function setup(){
    createCanvas(600,400);
}

function draw(){
    background(255,0,0);
    display();
    bounce();
    move()
rect(275,175,50,50)
}


function display(){
    //display ball
    stroke(255);
    strokeWeight(4);
    fill(50,250,50);
    ellipse(y, x, 50, 50);
    ellipse(x,y,50,50)
    
    
}

function move(){
  //make ball move
    y = y + speedy;
    x = x + speedx;
    
} 

function bounce(){
        //ball changes direction when it hits wall
    if(x>600 || x<0){
        speedx = -speedx;
    }
     if(y>400 || y<0){
        speedy = -speedy;
    }
}