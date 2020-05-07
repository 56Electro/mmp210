function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('darkblue');
	

   
  
    for (var x = 0; x < width; x += 120) {
      
      strokeWeight(100);
	  stroke('#00FFFF');
      fill(0);
      ellipse(x, 200, 25, 25);
      
      textSize(20);
      fill('');
      noStroke();
      text(x, x, 200);
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