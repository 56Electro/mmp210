/*
	Generated Pattern
	5/8/2020

  source code from: https://editor.p5js.org/leoyouyang/sketches/Jy7qHizBi
*/

let myColors = [[255, 255, 0], [204, 51, 0], [153, 0, 204], [0, 0, 255], [0, 255, 255], [121, 77, 255], [204, 51, 0], [255, 0, 255], [153, 102, 51], [255, 0, 0]];
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
  //Check if the user has entered a name
  if(input.value() != "") {
    updateTitle();
    drawShapes();
  }
}

function drawShapes() {
  background("black");
  
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 6; j++) {
      fillRandomColor();
      
      if (shapeSel.value() == "Square □") {
        rect(i*80+7.5, j*80+7.5, 65, 65);
      }
      
      else if (shapeSel.value() == "Arc ⌒") {
        arc(i*80+40, j*80+10, i*80+10, j*80+70, PI, TWO_PI);
      }
      
      //If the option "Both" is chosen, a sort checkerboard will be drawn out for you to see
      else {
        if ((i/2 == int(i/2) && j/2 != int(j/2)) || (i/2 != int(i/2) && j/2 == int(j/2))) {
          rect(i*80+7.5, j*80+7.5, 65, 65);
        }
      
        else {
          arc(i*80+40, j*80+10, i*80+10, j*80+70, PI, TWO_PI);
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
  if (shapeSel.value() == "Square □" || shapeSel.value()  == "Arc ⌒") {
    title.html(input.value() + " Loves " + shapeSel.value());
  }
  
  else {
    title.html(input.value() + " Loves Both! XD");
  }
  
  //Change the Submit button's label
  submButton.html("Resubmit / Shuffle Colors");
}

function pageElements() {
  createP("Please enter your name here: ");
  input = createInput("");
  createP("<br>Now select your favorite shape: ");
  shapeSel = createSelect();
  shapeSel.option("Square □");
  shapeSel.option("Arc ⌒");
  shapeSel.option("I love both");
  createP("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
  submButton = createButton("Submit");
  submButton.mousePressed(submit);
  title = createElement("h1", "");
}