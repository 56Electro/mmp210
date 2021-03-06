/*
	Final Project Pitch
	5.15.2020
*/

var currentSlide = 0;
var numberOfSlides = 3;

// next slide button
var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;

// prev slide button
var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;

// global scope
var arrowImage;
var pizzaImage;
var pastaImage;

function preload() {
	arrowImage = loadImage("arrow.png");
	pizzaImage = loadImage("pizza.jpg");
	pastaImage = loadImage("pasta.jpg");

}

function setup() {
	createCanvas(960, 720);
}

function draw() {
	background(51);

	// text('slide ' + currentSlide, 100, 100);

	var title; // the title of the slide
	var description;
	

	// setup each slide
	if (currentSlide == 0) {
		title = "My Final Project";
		description = "A modified version of my animated meme project that plays sound effects when you click on the text and even has background music.";
	} 
	else if (currentSlide == 1) {
		title = "User Interaction";
		description = "The user will simply click on the text that's on the meme to intereact with it and when the text is clicked, a sound effect will play.";
	} 
	else if (currentSlide == 2) {
		title = "Graphics";
		description = "The types of graphics that will be used, are just text, images and p5 colors.";

		image(pizzaImage, 10, 370, 300, 300);
		image(arrowImage, 330, 370, 300, 300);
		image(pastaImage, 650, 370, 300, 300);
	}

	// display title
	textSize(80);
	fill(255);
	noStroke();
	textAlign(LEFT, TOP);
	text(title, 20, 20);

	// display description
	textSize(40);
	text(description, 20, 200, width - 40);

	// slide button display
	// button background design
	fill('#101010');
	stroke(255);
	strokeWeight(2);
	
	if (currentSlide < numberOfSlides - 1) {
		rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5); // next
	}

	if (currentSlide > 0) {
		rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5); // prev
	}
	
	
	// text design
	fill(255);
	textSize(25);
	noStroke();
	textAlign(CENTER, CENTER);

	if (currentSlide < numberOfSlides - 1) {
		text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
	}
	
	if (currentSlide > 0) {
		text("Previous", prevButtonX, prevButtonY, prevButtonW, prevButtonH);
	}
	
}

function mousePressed() {
	// detecting mouse collision with the next button
	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
		if (currentSlide < numberOfSlides - 1) {
			currentSlide++;
		}
		
	}

	// detect mouse collision with prev button
	if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
		mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
		if (currentSlide > 0) {
			currentSlide--;
		}
	}
}