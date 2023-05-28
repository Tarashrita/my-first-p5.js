function preload(){
}

function setup(){
    canvas = createCanvas(620,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    image(video,0,0,620,480);
}


function take_snapshot(){
    save('student_name.png');
}

rectMode(CORNER);
fill(255);
rect(25, 25, 620, 480);
describe('green rect with green outline in mid-right of canvas');