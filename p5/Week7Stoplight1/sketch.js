var myState = 0;
var timer = 200;
var x = 0;
var vel = 3;

function setup() {
  // put setup code here
  createCanvas (800, 800);
  rectMode(CENTER); //instead of the top left corner being the point you set the center will be the point you set
}

function draw() {
  // put drawing code here
  background('white');
  fill('#F7FF3C');
  rect(width/2, height/2, 150, 400);

  switch(myState) {
    case 0:
    fill('grey');
    ellipse(width/2, height/2, 100, 100); //middle
    ellipse(width/2, height/2 - 125, 100, 100); //top

    fill('green');
    ellipse(width/2, height/2 + 125, 100, 100);   //bottom

    doTimer(1, 300);
    vel = 3;
    break;

    case 1:
    fill('grey');
    ellipse(width/2, height/2 - 125, 100, 100); //top
    ellipse(width/2, height/2 + 125, 100, 100);   //bottom

    fill('yellow');
    ellipse(width/2, height/2, 100, 100); //middle
    doTimer(2, 100);
    vel = 1;
    break;

    case 2:
    fill('red');

    ellipse(width/2, height/2 - 125, 100, 100); //top

    fill('grey');
    ellipse(width/2, height/2, 100, 100); //middle
    ellipse(width/2, height/2 + 125, 100, 100);   //bottom
    doTimer(0, 50);
    vel = 0;
    break;
  }

  fill('purple');
  rect(x, height - 100, 80, 60);
  x = x + vel;
  if (x > width) {
    x = 0;
  }
}

function doTimer(whichState, variableTimer) {
  timer--;
  if (timer <= 0) {
    timer = variableTimer;
    myState = whichState;
  }
}
