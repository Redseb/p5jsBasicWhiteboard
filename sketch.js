//March 28 #100DaysOfCode
//By: Mikołaj Zyzański
let thickness = 25;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw(){
    fill(0); //Set marker to black
    noStroke();
    if(thickness <= 0){
        thickness = 10;
    }
    text("Press c to Clear", 20, windowHeight-50);
    if(mouseIsPressed){
        ellipse(mouseX, mouseY, thickness);
    }
}

function keyPressed(){
    if(key == 'c'){
        background(255);
    } else if(key == 'p'){
        thickness += 10;
    } else if (key == 'o'){
        thickness -= 10;
    }
}