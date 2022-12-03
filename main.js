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
	poseNet.on('pose', gotposes);

}

