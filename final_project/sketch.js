/*
	Final Project (localhost:8080)
	5.19.2020
*/

// global scope
var arrowImage;
var pizzaImage;
var pastaImage;
var bitSound;
var music;

var counter = 0;
var instructions = "Click to begin!";
var x;
var y;

function preload() {
	arrowImage = loadImage("arrow.png");
	pizzaImage = loadImage("pizza.jpg");
	pastaImage = loadImage("pasta.jpg");
	bitSound = loadSound("8bitsound.mp3");
	music = loadSound("Organisms.mp3");
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;

	x = width - 150;
	y = height - 100;
}

function mousePressed() {

	if (!music.isPlaying()) {
		music.play();
	}
	counter++;
	if (counter == 3) {
		counter = 0;
	}

	if (mouseX > width/2 && mouseY > height/2) {
	bitSound.play();
		// bottom right
		instructions = 'Behold, a pizza! Now click meh again';
		y = 20;
	} else if (mouseX > width/2 && mouseY < height/2) {
		bitSound.play();
		instructions = 'BOOM! NOW SOME PASTA YO!! BETTER CLICK AGAIN';
		x = 50;
	} else if (mouseX < width/2 && mouseY < height/2) {
		bitSound.play();
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
	fill('#800080');
	stroke('#9400D3');
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