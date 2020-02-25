/*
	meme version 1 example
	2.25.2020
*/

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background('black');

	textSize(100);
	fill('blue');
	stroke('orange');
	strokeWeight(20);
	textStyle(ITALIC);
	textFont('Segoe UI');
	textAlign(RIGHT, CENTER);

	var hello = 'Yo yo!';
	var n = map(frameCount, 0, 200, 0, hello.length);
	text(hello, 0, 250);

	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	var welcome = 'Welcome to my Website, Hello! :)';
	var end = map(mouseY, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 250, 350);
}