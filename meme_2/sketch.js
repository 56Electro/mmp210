/*
	Meme Version 2.0
	3.3.2020
*/

// global scope
var pizzaImage;

function preload() {
	pizzaImage = loadImage("pizza.jpg");
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background('black');

	// draw the image
	image(pizzaImage, 0, 0, 500, 500);

	textSize(100);
	fill('blue');
	stroke('orange');
	strokeWeight(20);
	textStyle(ITALIC);
	textFont('Segoe UI');
	textAlign(CENTER, TOP);

	var hello = 'Yo yo!';
	var n = map(frameCount, 0, 200, 0, hello.length);
	text(hello.charAt(n), 0, 250);

	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textFont('Segoe UI');
	textAlign(CENTER, TOP);

	var welcome = 'Welcome to my Website, Hello! :)';
	var end = map(mouseY, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 250, 350);
}