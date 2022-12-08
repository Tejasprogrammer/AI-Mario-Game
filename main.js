function preload() 
{
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup()
 {
	canvas = createCanvas(1240,336);
	
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(1240,336);
    video.parent("game_console");
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose', gotPoses);

}

img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;


function modelLoaded() {
  console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}

function draw() {
background("#D3D3D3");
  if(noseX < 300)
  {
    marioX = marioX - 3;
  }
  if(noseX > 300)
  {
    marioX = marioX + 3;
  }
  if(noseY < 150)
  {
    marioY = marioY - 4;
  }
  image(img,marioX, marioY, 40,70);
}

