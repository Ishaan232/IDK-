noseX=0;
noseY=0;
function setup(){
   canvas=createCanvas(300,300);
   canvas.center();
   lv=createCapture(VIDEO);
   lv.size(300,300);
   lv.hide();
   nm4=ml5.poseNet(lv,modelloaded);
   nm4.on('pose',getpose);
}
function modelloaded(){
    console.log('posenet is initialised');
}
function getpose(result){
if(result.length>0){
    console.log(result);
noseX=result[0].pose.nose.x;
noseY=result[0].pose.nose.y;
console.log(noseX,noseY);
}    
}
function draw(){
image(lv,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX,noseY,20);
}
function thing(){
    save('image.png');
}