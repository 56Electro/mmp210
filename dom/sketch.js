/*

	DOM Elements
	5.22.2020

*/

var bgcolor;
var button;
var slider;
var input;

function setup() {
	canvas = createCanvas(200, 200);
	bgcolor = color(200);
	createP('');
	button = createButton("Click me to change the background!");
	button.mousePressed (changeColor);

	slider = createSlider(10, 100, 100);
	input = createInput('Enter any text here!');

}

function changeColor() {
	bgcolor = color(random(255));
}

function draw() {
	background(bgcolor);
	fill(3, 73, 252);
	rect(100, 100, slider.value(), slider.value());

	text(input.value(), 10, 20);
}