noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
}

function modeloaded(){
    console.log('PoseNet is initailized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.x;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("noseX = " + noseX + "noseY = " + noseY + "difference = " + difference);
     }
}

function draw(){
    document.getElementById("square_side").innerHTML = "Width and Height of the Square will be = " + difference + "px";
    background('#FF0000');
    fill('#0800FC');
    stroke('#0800FC');
    square(noseX, noseY, difference);
}