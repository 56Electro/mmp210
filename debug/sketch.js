/*
    debug exercise
*/

var faceSize = "100" * 3;

function setup() {
    createCanvas(640, 480);
    background(50);
    noStroke();
    fill("lightblue");
    ellipse(350, 320, faceSize); // face

    fill(0, 0, 0);
    ellipse(450, 250, 100); // right eye
    ellipse(200, 200, 100); // left eye
    ellipse(200, 100 + 100, 100, 50); // mouth

    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont("monospace");
    text("Nice work!");
}
