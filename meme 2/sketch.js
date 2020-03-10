/*
	Meme Version 2.0 (localhost:8080)
	3.7.2020
*/

// global scope
var arrowImage;
var pizzaImage;
var pastaImage;

var counter = 0;
var instructions = "Click to begin!";
var x;
var y;

function preload() {
	arrowImage = loadImage("arrow.png");
	pizzaImage = loadImage("pizza.jpg");
	pastaImage = loadImage("pasta.jpg");
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;

	x = width - 150;
	y = height - 100;
}

function mousePressed() {
	counter++;
	if (counter == 3) {
		counter = 0;
	}

	if (mouseX > width/2 && mouseY > height/2) {
		// bottom right
		instructions = 'Behold, a pizza! Now click meh again';
		y = 20;
	} else if (mouseX > width/2 && mouseY < height/2) {
		instructions = 'BOOM! NOW SOME PASTA YO!! BETTER CLICK AGAIN';
		x = 50;
	} else if (mouseX < width/2 && mouseY < height/2) {
		instructions = 'Now imma chill here :P';
		y = height - 100;
	}
}

function draw() {
	background('black');

	// draw the image
	if (counter == 0) {
		image(arrowImage, 0, 0, width, height);
	} else if (counter == 1) {
		image(pizzaImage, 0, 0, width, height);
	} else {
		image(pastaImage, 0, 0, width, height);
	}

	textSize(100);
	fill('#4169e1');
	stroke('#b7410e');
	strokeWeight(20);
	textStyle(ITALIC);
	textFont('Comic Sans MS');
	textAlign(CENTER, CENTER);
	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	
	text(instructions, x, y, 150);
}