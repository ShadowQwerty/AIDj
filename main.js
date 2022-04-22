var CluckCluck=""
LWX=0
LWY=0
RWX=0
RWY=0
function preload() {
    CluckCluck= loadSound("ChickenSong.mp3")
    }
    
function setup() {
    CANV=createCanvas(600,500)
    CANV.center()
    VID=createCapture(VIDEO)
    VID.hide()
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Is ready')
}

function gotPoses(results) {
if (results.length>0) {
    console.log(results)
    LWX= results[0].pose.leftWrist.X
    LWY= results[0].pose.leftWrist.Y
    console.log("leftWristX=" + LWX +"leftWristY="+ LWY)
    RWX= results[0].pose.reftWrist.X
    RWY= results[0].pose.reftWrist.Y
    console.log("reftWristX=" + RWX +"reftWristY="+ RWY)

}
}

function draw() {
  image(VID, 0,0,600,500)  
}


function play() {
    CluckCluck.play();
    CluckCluck.setVolume(1)
    CluckCluck.rate(1)
}