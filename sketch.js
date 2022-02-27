
let x, y, r, g, b, a;

function setup() {
  // put setup code here
  createCanvas(displayWidth,displayHeight);
  background(0);
}

function draw() {
  // put drawing code here
  noStroke();
	circle(mouseX, mouseY, 15);

}

function mousePressed() {
	x = random(400);
  y = random(300);
  r = random(255);
  g = random(255);
  b = random(255);
  fill(r, g, b);
}

function doubleClicked() {
	background(0);

}