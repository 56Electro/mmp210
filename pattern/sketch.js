/*
	Pattern
	5/8/2020
*/

let myColors = [[80, 80, 80], [248, 85, 86], [248, 143, 75], [253, 241, 133], [141, 214, 221]];
let i, j, colorFill;
let title, shapeSel, shuffleButton, input, submButton;

function setup() {  
  pageElements();
  createCanvas(480, 480);
  noStroke();
  ellipseMode(CORNER);
}

function draw() {

}

function submit() {
  //Check if the user has enter a name
  if(input.value() != "") {
    updateTitle();
    drawShapes();
  }
}

function drawShapes() {
  background(245, 245, 245);
  
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 6; j++) {
      fillRandomColor();
      
      if (shapeSel.value() == "Circle ◯") {
        ellipse(i*80+7.5, j*80+7.5, 65, 65);
      }
      
      else if (shapeSel.value() == "Triangle △") {
        triangle(i*80+40, j*80+10, i*80+10, j*80+70, i*80+70, j*80+70)
      }
      
      //If both shapes are loved, a checkerboard will be drawn
      else {
        if ((i/2 == int(i/2) && j/2 != int(j/2)) || (i/2 != int(i/2) && j/2 == int(j/2))) {
          ellipse(i*80+7.5, j*80+7.5, 65, 65);
        }
      
        else {
          triangle(i*80+40, j*80+10, i*80+10, j*80+70, i*80+70, j*80+70);
        }
      }   
    }
  }
}

function fillRandomColor() {
  colorFill = int(random(0, myColors.length));
  fill(myColors[colorFill][0], myColors[colorFill][1], myColors[colorFill][2]);
}

function updateTitle() {
  if (shapeSel.value() == "Circle" || shapeSel.value()  == "Triangle") {
    title.html(input.value() + " Loves " + shapeSel.value());
  }
  
  else {
    title.html(input.value() + " Loves Both! XD");
  }
  
  //Change the Submit button's label
  submButton.html("Resubmit / Shuffle Colors");
}

function pageElements() {
  createP("Enter your name: ");
  input = createInput("");
  createP("<br>Select your favorite shape: ");
  shapeSel = createSelect();
  shapeSel.option("Circle ○");
  shapeSel.option("Triangle △");
  shapeSel.option("I like both");
  createP("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
  submButton = createButton("Submit");
  submButton.mousePressed(submit);
  title = createElement("h1", "");
}