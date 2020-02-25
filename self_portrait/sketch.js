/*
	Self Portrait with Variables
	by Asghar
	2.11.2020
	-
*/

// global scope

// position variables
var x; // 200, // origin for face
var y = 180; 

// size variables
var s = 200; // size of the face

function setup() {
	// setup scope
	createCanvas(640, 360);
}

function draw () {
	// draw scope
	background('black');

	// shapes with xy coordinates + size

	fill('purple');
	stroke('white');
	strokeWeight(5);
	
	// face area

	// x = mouseX
	// y = mouseY
	ellipse(200, 180, 200); // face


	// x++;
	// s++;

	fill(0, 81, 82, 127);
	noStroke(0, 81, 82);
	ellipse(220, 160, 30); // right eye
	ellipse(160, 160, 30); // left eye

	// mouth
	rectMode(CENTER);
	stroke('darkblue');
	strokeWeight(40);
	noFill();

	var mouthHeight = map(mouseX, 0, width, 10, 150);
	rect(200, 220, 120, 20, 10);

	// right ear
	stroke('white');
	fill('red');
	arc(290, 180, 50, 70, -HALF_PI, HALF_PI);
	arc(290, 180, 40, 60, -HALF_PI, HALF_PI);

	// left ear
	stroke('white');
	fill('red');
	arc(110, 180, 50, 70, HALF_PI, -HALF_PI);
	arc(110, 180, 40, 60, HALF_PI, -HALF_PI);


	// shapes that are only xy points

	// hair
	line(x - 50, y - 110, x - 40, y - 80);
	line(x - 40, y - 110, x - 30, y - 80);
	line(x - 30, y - 110, x - 20, y - 80);
	line(x - 20, y - 110, x - 10, y - 80);
	line(x - 10, y - 110, x, y - 80);
	line(x, y - 110, x + 10, y - 80);
	line(x + 10, y - 110, x + 20, y - 80);
	line(x + 20, y - 110, x + 30, y - 80);
	line(x + 30, y - 110, x + 40, y - 80);

	// nose
	fill('DARKPURPLE');
	noStroke();
	triangle(x - 10, y, y, x, x + 20, y + 10);

}