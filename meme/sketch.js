/*
	Meme Version 1.0 (localhost:8080)
	3.5.2020
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

	textSize(45);
	strokeWeight(5);
	textStyle(NORMAL);
	textFont('Comic Sans MS');
	textAlign(CENTER, TOP);

	var welcome = 'In pizza we crust! :P';
	var end = map(mouseY, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 250, 350);
}