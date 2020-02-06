/*
	Self Portrait
	by Asghar
	2.6.2020
	-
*/

function setup() {
	createCanvas(640, 360);
}

function draw () {
	background('black');

	// shapes with xy coordinates + size

	fill('green');
	stroke('white');
	strokeWeight(5);
	
	// face area
	ellipse(200, 180, 200); // face

	fill(0, 81, 82, 127);
	noStroke(0, 81, 82);
	ellipse(220, 160, 30); // right eye
	ellipse(160, 160, 30); // left eye

	// mouth
	rectMode(CENTER);
	stroke('blue');
	strokeWeight(5);
	noFill();
	rect(200, 220, 100, 20, 10);

	// right ear
	stroke('white');
	fill('red');
	arc(290, 180, 50, 70, -HALF_PI, HALF_PI);
	arc(290, 180, 40, 60, -HALF_PI, HALF_PI);

	// left ear
	stroke('white')
	fill('red')
	arc(110, 180, 50, 70, HALF_PI, -HALF_PI);
	arc(110, 180, 40, 60, HALF_PI, -HALF_PI);


	// shapes that are only xy points

	// hair
	line(150, 70, 160, 100);
	line(160, 70, 170, 100);
	line(170, 70, 180, 100);
	line(180, 70, 190, 100);
	line(190, 70, 200, 100);
	line(200, 70, 210, 100);
	line(210, 70, 220, 100);
	line(220, 70, 230, 100);
	line(230, 70, 240, 100);

	// nose
	fill('DARKPURPLE');
	noStroke();
	triangle(190, 180, 180, 200, 220, 190);

}