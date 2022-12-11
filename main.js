video = '';
function preload() {
    
}

function setup() 
{
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createVideo('video.mp4');
}

function draw() {
    
}

function modelloaded(){
    console.log("Model is initialized");
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Objects detecting";
}