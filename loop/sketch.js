function setup() {
	createCanvas(640, 400);
}

function draw() {
	background('purple');
	strokeWeight(4);
	stroke(255);
  
    for (var x = 0; x <= width; x += 50) {
      for (var y = 0; y <= height;  y += 50) {
          fill(random(255), 0, random(255));
    	  ellipse (x, y, 25, 25);

      textSize(20);
      fill('white');
      noStroke();
      textAlign (CENTER, CENTER)
      text("s", x, y);
    	}
    }

  
  
  /*
	ellipse(100, 200, 25, 25);
	ellipse(150, 200, 25, 25);
	ellipse(200, 200, 25, 25);
	ellipse(250, 200, 25, 25);
	ellipse(300, 200, 25, 25);
	ellipse(350, 200, 25, 25);
	ellipse(400, 200, 25, 25);
	ellipse(450, 200, 25, 25);
	ellipse(500, 200, 25, 25);
	ellipse(550, 200, 25, 25);
	ellipse(600, 200, 25, 25);
	ellipse(650, 200, 25, 25);
    */


}