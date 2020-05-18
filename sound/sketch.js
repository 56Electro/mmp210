/*
	Sound
	5.18.2020
*/

// global sound variables
var bitSound;
var music;

function preload() {
	bitSound = loadSound("8bitsound.mp3");
	music = loadSound("Organisms.mp3");
}

function setup() {
	createCanvas(600, 600);
	bitSound.playMode("restart"); // the default is "sustain"
}

function draw() {
	if (music.isPlaying()) {
		background('darkblue');
	} else {
		background(400);
	}

	var volume = map(mouseY, 0, height, 1, 0);
	music.setVolume(volume);

	noStroke();
	fill('#03befc');
	rect(0, mouseY, width, 10);

	// var pan = map(mouseX, 0, width, -1, 1);
	// music.pan(pan);

	var rate = map(mouseX, 0, width, 5, 2);
	music.rate(rate);

	rect(mouseX, 0, 10, height);

}

function mousePressed() {
	bitSound.play();

	if (music.isPlaying()) {
		music.pause();
		// music.stop();
	} else {
		music.play();
	}
}