function setup() {
  createCanvas(500, 500);
  background(196);
  // put setup code here
}

function draw() {
  // put drawing code here
  stroke(24);
  strokeWeight(2);
  line(pmouseX, pmouseY, mouseX, mouseY);
  line(width-pmouseX, pmouseY, width-mouseX, mouseY);
}
