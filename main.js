var mars_images_array=["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486270860EDR_F0481570NCAM00323M_.JPG"]
var randomnumber=Math.floor(Math.random()*4);
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var roverX=10;
var roverY=10;

var roverWidth=100;
var roverHeight=100;

var backgroundImg=mars_images_array[randomnumber];
var roverImg = "rover.png";

function Add(){
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImg;

    roverImgTag=new Image();
    roverImgTag.onload=uploadRover;
    roverImgTag.src=roverImg;


} 

function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width, canvas.height);   
}

function uploadRover(){
    ctx.drawImage(roverImgTag,roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    console.log(e);
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        Up();
        
    }
    if(keyPressed=='40'){
        Down();
    }
    if(keyPressed=='37'){
        Left();
    }
    if(keyPressed=='39'){
        Right();
    }
}
function Up(){
if(roverY>=0){
    roverY-=10;
    uploadBackground();
    uploadRover();
}
}

function Down(){
    if(roverY<=500){
        roverY+=10;
        uploadBackground();
        uploadRover();
    }
    }

    function Left(){
        if(roverX>=0){
            roverX-=10;
            uploadBackground();
            uploadRover();
        }
        }
        function Right(){
            if(roverX<=700){
                roverX+=10;
                uploadBackground();
                uploadRover();
            }
            }