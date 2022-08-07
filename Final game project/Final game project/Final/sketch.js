/*

The Game Project 7 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var clouds;
var mountains;
var trees_x;
var canyon;
var collectable;

var game_score;
var flagpole;
var lives;

//Function to preload audio
function preload()
{
    //Diffrent sound format
    soundFormats('mp3','wav','ogg');
    
    
    //Jumpping sound
    jumpSound = loadSound('assets/jump.wav');
    jumpSound.setVolume(0.1);
    
    //collecting sound
    collectableSound = loadSound('assets/collect.wav');
    collectableSound.setVolume(3);

    // falling sound
    fallingSound = loadSound('assets/falling.wav');
    fallingSound.setVolume(0.1);
    
    //victory sound
    victorySound = loadSound('assets/victory.wav');
    victorySound.setVolume(1);
    
}



function setup()
{
	createCanvas(1700, 576);
    lives = 4;
    textSize(20);
    
    
    startGame();
    
    ////////////////////////////////////////////////// Images /////////////////////////////////////////////////////////////////
        
    lives1=loadImage('assets/lives1.png')
    flag=loadImage('assets/pirate.png')

}
function startGame()
{
    floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;


	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
    
    // Array for trees
     trees_x = [100,700,1400,2100,2800,3700,4500,5200,5900,6600,7300,8000,8700,9400,11000,11800,12500,13200,13900,14600,15100];
    
    // Array for clouds
    clouds = [
        {x_pos: 10,y_pos: 10,size: 1,scale:1},
        {x_pos: 400, y_pos: 10,size: 1,scale:1},
        {x_pos: 800,y_pos: 10,size: 1,scale:1},
        {x_pos: 1200, y_pos: 10,size: 1,scale:1},
        {x_pos: 1600, y_pos: 10,size: 1,scale:1},
        {x_pos: 2000, y_pos: 10,size: 1,scale:1},
        {x_pos: 2400, y_pos: 10,size: 1,scale:1},
        {x_pos: 3000, y_pos: 10,size: 1,scale:1},
        {x_pos: 3600, y_pos: 10,size: 1,scale:1},
        {x_pos: 4400, y_pos: 10,size: 1,scale:1},
        {x_pos: 5000, y_pos: 10,size: 1,scale:1},
        {x_pos: 5400, y_pos: 10,size: 1,scale:1},
        {x_pos: 6000, y_pos: 10,size: 1,scale:1},
        {x_pos: 6400, y_pos: 10,size: 1,scale:1},
        {x_pos: 7000, y_pos: 10,size: 1,scale:1},
        {x_pos: 7400, y_pos: 10,size: 1,scale:1},
        {x_pos: 8000, y_pos: 10,size: 1,scale:1},
        {x_pos: 8400, y_pos: 10,size: 1,scale:1},
        {x_pos: 9000, y_pos: 10,size: 1,scale:1},
        {x_pos: 10400, y_pos: 10,size: 1,scale:1},
        {x_pos: 11400, y_pos: 10,size: 1,scale:1},
        {x_pos: 12400, y_pos: 10,size: 1,scale:1},
        {x_pos: 12000, y_pos: 10,size: 1,scale:1},
        {x_pos: 13400, y_pos: 10,size: 1,scale:1}     ]
   
    // Array for mountains
    mountains = [
        {x_pos: 0,y_pos: 20,size: 1,scale:1},
        {x_pos: 400,y_pos: 20,size: 1,scale:1},
        {x_pos: 800,y_pos: 20,size: 1,scale:1},
        {x_pos: 1600,y_pos: 20,size: 1,scale:1},
        {x_pos: 2400,y_pos: 20,size: 1,scale:1},
        {x_pos: 3200,y_pos: 20,size: 1,scale:1},
        {x_pos: 4000,y_pos: 20,size: 1,scale:1},
        {x_pos: 4800,y_pos: 20,size: 1,scale:1},
        {x_pos: 5600,y_pos: 20,size: 1,scale:1},
        {x_pos: 6400,y_pos: 20,size: 1,scale:1},
        {x_pos: 7200,y_pos: 20,size: 1,scale:1},
        {x_pos: 8000,y_pos: 20,size: 1,scale:1},
        {x_pos: 8800,y_pos: 20,size: 1,scale:1},
        {x_pos: 9600,y_pos: 20,size: 1,scale:1},
        {x_pos: 10400,y_pos: 20,size: 1,scale:1},
        {x_pos: 11200,y_pos: 20,size: 1,scale:1},
        {x_pos: 12000,y_pos: 20,size: 1,scale:1},
        {x_pos: 12800,y_pos: 20,size: 1,scale:1},
        {x_pos: 13600,y_pos: 20,size: 1,scale:1},
        {x_pos: 14200,y_pos: 20,size: 1,scale:1},
        {x_pos: 15000,y_pos: 20,size: 1,scale:1},
        {x_pos: 15800,y_pos: 20,size: 1,scale:1},
        {x_pos: 16600,y_pos: 20,size: 1,scale:1},
        {x_pos: 17400,y_pos: 20,size: 1,scale:1},
        {x_pos: 18200,y_pos: 20,size: 1,scale:1},
        {x_pos: 19000,y_pos: 20,size: 1,scale:1},
        {x_pos: 19800,y_pos: 20,size: 1,scale:1},
        {x_pos: 20400,y_pos: 20,size: 1,scale:1},

    ]
    // Array for collectable
    collectable = [
        {x_pos: 950,y_pos: 150,size: 50,scale:1, isFound: false},
        {x_pos: 1000,y_pos: 150,size: 50,scale:1, isFound: false}
        
    ]
    // Array for canyon
    canyon =[
        {x_pos: 1000,width: 120},
        {x_pos: 1400,width: 120},
        {x_pos: 2000,width: 120},
        {x_pos: 2300,width: 120},
        {x_pos: 3400,width: 120},
        {x_pos: 3900,width: 120},
        {x_pos: 4400,width: 120},
        {x_pos: 4900,width: 120},
        {x_pos: 5300,width: 120},
        {x_pos: 5800,width: 120},
        {x_pos: 6200,width: 120},
        {x_pos: 6400,width: 120},
        {x_pos: 7900,width: 120},
        {x_pos: 8200,width: 120},
        {x_pos: 8600,width: 120},
        {x_pos: 9000,width: 120},
        {x_pos: 9400,width: 120},
        {x_pos: 9900,width: 120},
        {x_pos: 10300,width: 120},
        {x_pos: 10800,width: 120},
        {x_pos: 11200,width: 120},
        {x_pos: 11600,width: 120},
        {x_pos: 12000,width: 120},
        {x_pos: 12300,width: 120}  
    ]
    game_score = 0;
    
    flagpole = {x_pos: 4800, isReached: false, height: 300};
    
    lives -= 1;
}


function draw()
{
	background(0, 191, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green color ground
    
    push();
    translate(scrollPos,0);

    
    // Draw clouds.
    drawClouds();

	// Draw mountains.
    drawMountains();

	// Draw trees.
    drawTrees();
    
    // Draw collectable items.
    
    for(var i = 0; i < collectable.length; i++)
    {
    if(!collectable[i].isFound)
    {
        drawCollectable(collectable[i]);
        checkCollectable(collectable[i]);
    }
    }
       
    // Draw canyons.
    
    for(var i = 0; i < canyon.length; i++)
    {
        drawCanyon(canyon[i]);
        checkCanyon(canyon[i]);
    }
    
    // Drawing flagple.
    if(!checkFlagpole.isReached)
        {
            checkFlagpole(flagpole);
        }
    drawFlagpole(flagpole);
    
    pop();
    

	// Draw game character.
    drawGameChar();
    
    text("Score:" + game_score, 1100, 40);
    text("Lives:",1100,75);
    
    for(i = 0; i < lives; i++){
        image(lives1,1160 +i*40, + 40);
    }
         
    if(lives <1)
    {
        text("Game over - Better luck next time! (Press space to continue)", width/2 - 100, height/2);
        return;
    }
    else if(flagpole.isReached)
        {
            text("Well done level completed! (Press space to continue)", width/2 - 100, height/2);
            return;
        }
    
    if(gameChar_y > height)
        {
            if(lives > 0)startGame();
        }

	// Logic to make the game character move left or the background scroll.
	if(isLeft)
	{
		if(gameChar_world_x > width * 10)
		{
			gameChar_world_x -= 2;
		}
		else
		{
			scrollPos += 5;
		}
	}
    // Logic to make the game character move right  
	if(isRight)
	{
		if(gameChar_world_x< width * 0.01)
		{
			gameChar_world_x  += 3;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
    
     if(isLeft)
        {
            gameChar_world_x -=0.1;
        }
    if(isRight)
        {
            gameChar_world_x +=0.1;
        }
    
    if(gameChar_y < floorPos_y)
        {
            gameChar_y +=3;
            isFalling = true;
        }
    else if(isPlummeting == false)
    {
            isFalling = false;
            gameChar_y = floorPos_y;
        
    }



	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

	console.log("press" + keyCode);
	console.log("press" + key);
    
    if(flagpole.isReached && key == '')
        {
            nextLevel();
        }
    else if(lives == 0 && key == '')
        {
            returnToStart();
        }
    
    if(key == 'A' || keyCode == 65)
    {
        isLeft = true;
    }
    
    if(key == 'D' || keyCode == 68)
    {
        isRight = true;
    }
    if(key == '' || keyCode == '87')
    {
        if(!isFalling)
        {
            gameChar_y -= 100;
            jumpSound.play();
        }
    }
}

function keyReleased()
{

	console.log("release" + keyCode);
	console.log("release" + key);
    
    
    if(key  == 'A' || keyCode == 37)
    {
        isLeft = false;
    }
    
    if(key == 'D' || keyCode == 39)
    {
        isRight = false;
    }

}



// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
    if(isLeft && isFalling)
	{
		// add your jumping-left code
        fill(255,140,0);
        // characters body 
        rect(gameChar_x-10,gameChar_y-57,20,30);
        rect(gameChar_x-10,gameChar_y-27,8,8);
        rect(gameChar_x-15,gameChar_y-27,8,5);
        rect(gameChar_x-15,gameChar_y-27,8,20);
        rect(gameChar_x+2,gameChar_y-27,8,25);
        fill(0,0,255);
        rect(gameChar_x+2,gameChar_y-7,8,5);
        rect(gameChar_x-15,gameChar_y-7,8,5);
        rect(gameChar_x-10,gameChar_y-35,20,5);
        fill(228,194,152);
        rect(gameChar_x+10,gameChar_y-76,4,23);
        rect(gameChar_x-14,gameChar_y-76,4,23);
        ellipse(gameChar_x,gameChar_y-64,15,15);
        fill(0,0,255);
        rect(gameChar_x+10,gameChar_y-72,4,3);
        rect(gameChar_x-14,gameChar_y-72,4,3);
        fill(0,0,0);
        rect(gameChar_x-2,gameChar_y-62,5,1);
        fill(255,255,255);
        rect(gameChar_x-2,gameChar_y-67,1.8,1.8);
        rect(gameChar_x+4,gameChar_y-67,1.8,1.8);
        fill(255,140,0);
        rect(gameChar_x+10,gameChar_y-57,4,4);
        rect(gameChar_x-14,gameChar_y-57,4,4);
        fill(0,0,0);
        rect(gameChar_x-2.5,gameChar_y-66,1,1);
        rect(gameChar_x+3.5,gameChar_y-66,1,1);
        rect(gameChar_x-2.7,gameChar_y-68,1.5,0.5);
        rect(gameChar_x+3.3,gameChar_y-68,1.5,0.5);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        fill(255,140,0);
        rect(gameChar_x-10,gameChar_y-57,20,30);
        rect(gameChar_x-10,gameChar_y-27,8,25);
        rect(gameChar_x+2,gameChar_y-27,8,9);
        rect(gameChar_x+10,gameChar_y-20,8,9);
        rect(gameChar_x+10,gameChar_y-25,8,20);
        fill(0,0,255);
        rect(gameChar_x+10,gameChar_y-7,8,5);
        rect(gameChar_x-10,gameChar_y-7,8,5);
        rect(gameChar_x-10,gameChar_y-35,20,5);
        fill(228,194,152);
        rect(gameChar_x+10,gameChar_y-76,4,23);
        rect(gameChar_x-14,gameChar_y-76,4,23);
        ellipse(gameChar_x,gameChar_y-64,15,15);
        fill(0,0,255);
        rect(gameChar_x+10,gameChar_y-72,4,3);
        rect(gameChar_x-14,gameChar_y-72,4,3);
        fill(0,0,0);
        rect(gameChar_x-2,gameChar_y-62,5,1);
        fill(255,255,255);
        rect(gameChar_x-3,gameChar_y-67,1.8,1.8);
        rect(gameChar_x+3,gameChar_y-67,1.8,1.8);
        fill(255,140,0);
        rect(gameChar_x+10,gameChar_y-57,4,4);
        rect(gameChar_x-14,gameChar_y-57,4,4);
        fill(0,0,0);
        rect(gameChar_x-2.5,gameChar_y-66,1,1);
        rect(gameChar_x+3.5,gameChar_y-66,1,1);
        rect(gameChar_x-2.7,gameChar_y-68,1.5,0.5);
        rect(gameChar_x+3.3,gameChar_y-68,1.5,0.5);

	}
	else if(isLeft)
	{
		// add your walking left code
        fill(255,140,0);
        rect(gameChar_x-10,gameChar_y-57,20,30);
        rect(gameChar_x-10,gameChar_y-27,8,8);
        rect(gameChar_x-15,gameChar_y-27,8,5);
        rect(gameChar_x-15,gameChar_y-27,8,20);
        rect(gameChar_x+2,gameChar_y-27,8,25);
        fill(0,0,255);
        rect(gameChar_x+2,gameChar_y-7,8,5);
        rect(gameChar_x-15,gameChar_y-7,8,5);
        rect(gameChar_x-10,gameChar_y-35,20,5);
        fill(228,194,152);
        rect(gameChar_x+10,gameChar_y-57,4,25);
        rect(gameChar_x-18,gameChar_y-57,4,25);
        ellipse(gameChar_x,gameChar_y-64,15,15);
        fill(0,0,255);
        rect(gameChar_x+10,gameChar_y-39,4,3);
        rect(gameChar_x-18,gameChar_y-39,4,3);
        fill(0,0,0);
        rect(gameChar_x-2,gameChar_y-62,5,1);
        fill(255,255,255);
        rect(gameChar_x-2,gameChar_y-67,1.8,1.8);
        rect(gameChar_x+4,gameChar_y-67,1.8,1.8);
        fill(255,140,0);
        rect(gameChar_x+10,gameChar_y-57,4,4);
        rect(gameChar_x-14,gameChar_y-57,4,4);
        fill(0,0,0);
        rect(gameChar_x-2.5,gameChar_y-66,1,1);
        rect(gameChar_x+3.5,gameChar_y-66,1,1);
        rect(gameChar_x-2.5,gameChar_y-68,1.5,0.5);
        rect(gameChar_x+3.1,gameChar_y-68,1.5,0.5);


	}
	else if(isRight)
	{
		// add your walking right code
        fill(255,140,0);
        rect(gameChar_x-10,gameChar_y-57,20,30);
        rect(gameChar_x-10,gameChar_y-27,8,25);
        rect(gameChar_x+2,gameChar_y-27,8,9);
        rect(gameChar_x+10,gameChar_y-20,8,9);
        rect(gameChar_x+10,gameChar_y-25,8,20);
        fill(0,0,255);
        rect(gameChar_x+10,gameChar_y-7,8,5);
        rect(gameChar_x-10,gameChar_y-7,8,5);
        rect(gameChar_x-10,gameChar_y-35,20,5);
        fill(228,194,152);
        rect(gameChar_x+14,gameChar_y-57,4,25);
        rect(gameChar_x-14,gameChar_y-57,4,25);
        ellipse(gameChar_x,gameChar_y-64,15,15);
        fill(0,0,255);
        rect(gameChar_x+14,gameChar_y-39,4,3);
        rect(gameChar_x-14,gameChar_y-39,4,3);
        fill(0,0,0);
        rect(gameChar_x-2,gameChar_y-62,5,1);
        fill(255,255,255);
        rect(gameChar_x-3,gameChar_y-67,1.8,1.8);
        rect(gameChar_x+3,gameChar_y-67,1.8,1.8);
        fill(255,140,0);
        rect(gameChar_x+10,gameChar_y-57,4,4);
        rect(gameChar_x-14,gameChar_y-57,4,4);
        fill(0,0,0);
        rect(gameChar_x-2.5,gameChar_y-66,1,1);
        rect(gameChar_x+3.5,gameChar_y-66,1,1);
        rect(gameChar_x-2.7,gameChar_y-68,1.5,0.5);
        rect(gameChar_x+3.3,gameChar_y-68,1.5,0.5);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        fill(255,140,0)
        rect(gameChar_x-10,gameChar_y-57,20,30);
        rect(gameChar_x-10,gameChar_y-27,8,10);
        rect(gameChar_x+2,gameChar_y-27,8,10);
        fill(0,0,255);
        rect(gameChar_x+2,gameChar_y-18,8,5);
        rect(gameChar_x-10,gameChar_y-18,8,5);
        rect(gameChar_x-10,gameChar_y-35,20,5);
        fill(228,194,152);
        rect(gameChar_x+10,gameChar_y-76,4,23);
        rect(gameChar_x-14,gameChar_y-76,4,23);
        ellipse(gameChar_x,gameChar_y-64,15,15);
        fill(0,0,255);
        rect(gameChar_x+10,gameChar_y-72,4,3);
        rect(gameChar_x-14,gameChar_y-72,4,3);
        fill(0,0,0);
        rect(gameChar_x-2,gameChar_y-62,5,1);
        fill(255,255,255);
        rect(gameChar_x-3,gameChar_y-67,1.8,1.8);
        rect(gameChar_x+3,gameChar_y-67,1.8,1.8);
        fill(255,140,0);
        rect(gameChar_x+10,gameChar_y-57,4,4);
        rect(gameChar_x-14,gameChar_y-57,4,4);
        fill(0,0,0);
        rect(gameChar_x-2.5,gameChar_y-66,1,1);
        rect(gameChar_x+3.5,gameChar_y-66,1,1);
        rect(gameChar_x-2.7,gameChar_y-68,1.5,0.5);
        rect(gameChar_x+3.3,gameChar_y-68,1.5,0.5);

	}
	else
	{
		// add your standing front facing code
        fill(255,140,0);
        rect(gameChar_x-10,gameChar_y-57,20,30);
        rect(gameChar_x-10,gameChar_y-27,8,25);
        rect(gameChar_x+2,gameChar_y-27,8,25);
        fill(0,0,255);
        rect(gameChar_x+2,gameChar_y-7,8,5);
        rect(gameChar_x-10,gameChar_y-7,8,5);
        rect(gameChar_x-10,gameChar_y-35,20,5);
        fill(228,194,152);
        rect(gameChar_x+10,gameChar_y-57,4,25);
        rect(gameChar_x-14,gameChar_y-57,4,25);
        ellipse(gameChar_x,gameChar_y-64,15,15);
        fill(0,0,255);
        rect(gameChar_x+10,gameChar_y-39,4,3);
        rect(gameChar_x-14,gameChar_y-39,4,3);
        fill(0,0,0);
        rect(gameChar_x-2,gameChar_y-62,5,1);
        fill(255,255,255);
        rect(gameChar_x-3,gameChar_y-67,1.8,1.8);
        rect(gameChar_x+3,gameChar_y-67,1.8,1.8);
        fill(255,140,0);
        rect(gameChar_x+10,gameChar_y-57,4,4);
        rect(gameChar_x-14,gameChar_y-57,4,4);
        fill(0,0,0);
        rect(gameChar_x-2.5,gameChar_y-66,1,1);
        rect(gameChar_x+3.5,gameChar_y-66,1,1);
        rect(gameChar_x-2.7,gameChar_y-68,1.5,0.5);
        rect(gameChar_x+3.3,gameChar_y-68,1.5,0.5);
    
}
    
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

function drawClouds()
{
    // Code for drwaing Cloud
      for(var s = 0; s < clouds.length; s++)
    {
        fill(192,192,192);
        ellipse(clouds[s].x_pos+190* clouds[s].scale,clouds[s].y_pos+90,60 * clouds[s].scale,60 * clouds[s].size );
        ellipse(clouds[s].x_pos+160* clouds[s].scale,clouds[s].y_pos+90,50* clouds[s].scale,50 * clouds[s].size);
        ellipse(clouds[s].x_pos+220* clouds[s].scale,clouds[s].y_pos+90,50* clouds[s].scale,50* clouds[s].size);
        ellipse(clouds[s].x_pos+250* clouds[s].scale,clouds[s].y_pos+90,40* clouds[s].scale,40* clouds[s].size );
        ellipse(clouds[s].x_pos+130* clouds[s].scale,clouds[s].y_pos+95,40* clouds[s].scale,40 * clouds[s].size);

    }
}

// Function to draw mountains objects.

function drawMountains()
{
    // Code for drwaing mountain
   for(var m = 0 ; m < mountains.length; m++)
    {
        fill(211,211,211);
        triangle(mountains[m].x_pos+700*mountains[m].scale,
                 mountains[m].y_pos+180* mountains[m].size,
                 mountains[m].x_pos+480* mountains[m].scale,
                 mountains[m].y_pos+415* mountains[m].size,
                 mountains[m].x_pos+900* mountains[m].scale,
                 mountains[m].y_pos+415 * mountains[m].size);
        
        noStroke();
        fill(255);
        triangle(mountains[m].x_pos+700* mountains[m].scale,
                 mountains[m].y_pos+180* mountains[m].size,
                 mountains[m].x_pos+614* mountains[m].scale,
                 mountains[m].y_pos+273* mountains[m].size,
                 mountains[m].x_pos+786* mountains[m].scale,
                 mountains[m].y_pos+280 * mountains[m].size);
        
        fill(211,211,211);
        triangle(mountains[m].x_pos+700* mountains[m].scale,
                 mountains[m].y_pos+255* mountains[m].size,
                 mountains[m].x_pos+714* mountains[m].scale,
                 mountains[m].y_pos+280* mountains[m].size,
                 mountains[m].x_pos+686* mountains[m].scale,
                 mountains[m].y_pos+280 * mountains[m].size);
        
        fill(211,211,211);
        triangle(mountains[m].x_pos+680* mountains[m].scale,
                 mountains[m].y_pos+255* mountains[m].size,
                 mountains[m].x_pos+620* mountains[m].scale,
                 mountains[m].y_pos+280* mountains[m].size,
                 mountains[m].x_pos+714* mountains[m].scale,
                 mountains[m].y_pos+280 * mountains[m].size); 
    }
}

// Function to draw trees objects.

function drawTrees()
{
    // Code for drwaing tree
    
    for(var i = 0; i < trees_x.length ; i++)
    {
        fill(139,69,19);
        rect(trees_x[i]-5,
             floorPos_y-76,
             10,80);
        
        fill(0,100,0);
        triangle(trees_x[i]-5,floorPos_y-132,
                 trees_x[i]+45,floorPos_y-12,
                 trees_x[i]-45,floorPos_y-12);
        
        fill(34,139,34);
        triangle(trees_x[i]-5,
                 floorPos_y-132,
                 trees_x[i]-45,
                 floorPos_y-52,
                 trees_x[i]+45,
                 floorPos_y-52);
        
        fill(100, 231, 100);
        triangle(trees_x[i]-5,
                 floorPos_y-132,
                 trees_x[i]-45,
                 floorPos_y-82,
                 trees_x[i]+45,
                 floorPos_y-82);
        
    }
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
   fill(0, 191, 255);
     rect(t_canyon.x_pos ,
          434,
          t_canyon.width + 30,
          150);
    
    fill(139,69,19);
     rect(t_canyon.x_pos ,
          534,
          t_canyon.width + 30, 
          70);
    

}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    if(t_canyon.x_pos <gameChar_world_x && gameChar_world_x < t_canyon.x_pos + t_canyon.width && gameChar_y == floorPos_y)
    {
        isPlummeting = true;
        fallingSound.play();
    }
    if (isPlummeting)
    {
        isPlummeting = true;
        gameChar_y += 3;
    }
    

}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    // Code for drwaing collectable
    {   fill(255);
        triangle(t_collectable.x_pos+328,
                 t_collectable.y_pos+236,t_collectable.x_pos+321,
                 t_collectable.y_pos+244,t_collectable.x_pos+335,
                 t_collectable.y_pos+244,10*t_collectable.scale,
                 0.6 * t_collectable.size);
       
        rect(t_collectable.x_pos+323,
             t_collectable.y_pos+244,
             10*t_collectable.scale,0.6 * t_collectable.size);
        
    
        fill(0,0,0);
        rect(t_collectable.x_pos+319.2,
             t_collectable.y_pos+273,
             18*t_collectable.scale,
             0.04* t_collectable.size);
        
        rect(t_collectable.x_pos+325.5,
             t_collectable.y_pos+275,
             5*t_collectable.scale,
             0.18* t_collectable.size);
        
        rect(t_collectable.x_pos+318,
             t_collectable.y_pos+272,
             2*t_collectable.scale,
             0.06* t_collectable.size);
            
        rect(t_collectable.x_pos+337,
             t_collectable.y_pos+272,
             2*t_collectable.scale,
             0.06* t_collectable.size);
    
        ellipse(t_collectable.x_pos+328,
                t_collectable.y_pos+287,
                8*t_collectable.scale,
                0.2* t_collectable.size);

    }
    
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
   var d = dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos);

    if(gameChar_world_x != d && gameChar_y <= d)
    {
        t_collectable.isFound = true;
        collectableSound.play();
        game_score += 1;
       
       }
    

}

function drawFlagpole(t_flagpole){
    push();
    strokeWeight(8);
    stroke(180);
    line(t_flagpole.x_pos, floorPos_y,
        t_flagpole.x_pos, floorPos_y - flagpole.height); 
    if(t_flagpole.isReached){
         image(flag,t_flagpole.x_pos - 100, floorPos_y - 300, 100,100);
    
    }
    else{
        fill(255,0,255);
        image(flag,t_flagpole.x_pos - 100, floorPos_y - 100, 100,100);
        
    }
    pop();
}

///////////////////// Function to check the contact between the character and the flagpole /////////////////////////////

function checkFlagpole(t_flagpole)
{
    if(dist(gameChar_world_x, 0, flagpole.x_pos, 0)<20)
        {
            t_flagpole.isReached = true;
            victorySound.play();
        }
}





