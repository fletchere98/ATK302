var cars = [];
var frogPos;
var myState = 0;
var myTimer = 0;
var bee;
var bird;
var birds = [];
var splashscreen;
var song1;
var winstate;
var losestate;

function preload() {
  song1 = loadSound('assets/BasketsintheSkyWilliamRosati.mp3');
  song1.loop();
  song1.stop();
}


function setup() {

  createCanvas(800, 700);
  song1.loop();
  myFont = loadFont('assets/BLKCHCRY.TTF'); //otf or ttf

  birds[0] = loadImage("assets/blue-01.png");
  birds[1] = loadImage("assets/pink-01.png");
  birds[2] = loadImage("assets/yellow-01.png");
  birds[3] = loadImage("assets/green.png");
  birds[4] = loadImage("assets/orange.png");
  birds[5] = loadImage("assets/purple.png");
  birds[6] = loadImage("assets/red1.png");

  splashscreen = loadImage("assets/Plants.jpg");
  winstate = loadImage("assets/garden.jpg");
  losestate = loadImage("assets/desertlosestate.jpg");
  // spawn the cars
  for (var i = 0; i < 10; i++) {
    cars.push(new Car());
  }

  yodaRight = loadImage("assets/bee.png");
  yodaLeft = loadImage("assets/bee.png");
  yoda = yodaRight;



  // initialize frog position

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  imageMode(CENTER); //for when you add images
  ellipseMode(CENTER);
}


function draw() {

  switch (myState) {

    case 0:
      // play screen
      image(splashscreen, 400, 400);
      fill(52, 222, 235);
      textFont(myFont, 50);
      text('It is Spring! Help the bee', 80, 400);
      text('pollinate the flowers! Click to Play!', 80, 500);
      break;

    case 1:
      game();
      myTimer++;
      if (myTimer > 1200) {
        myTimer = 0;
        myState = 2;
      }

      break;

    case 2:
      background("white");
      image(losestate, 300, 400);
      fill(32, 0, 148);
      textSize(75)
      text('You Lose', 200, 400);
      text('Click to try again!', 200, 500);
      break;

    case 3:
      background("white");
      fill("blue");
      image(winstate, 200, 350);
      fill(255, 0, 242);
      textSize(90);
      text("You Win!", 200, 400);
      break;
  }
}
// end of the draw loop

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //lose
      resetTheGame();
      myState = 0;
      break;

    case 3: //win
      resetTheGame();
      myState = 0;
      break;
  }
}

function resetTheGame() {
  // spawn the cars
  cars = []; //clears the array before more cars are spawned
  for (var i = 0; i < 10; i++) {
    cars.push(new Car());
  }
  myTimer = 0;
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length - 1)); //floor means to cut off the decimal point
  this.timer = 0;
  this.maxTimer = random(10, 30);
  this.mySize = random(40, 120);


  // methods
  // what the car looks like
  this.display = function() {
    fill(this.r, this.g, this.b);
    image(birds[this.birdNum], this.pos.x, this.pos.y, this.mySize, this.mySize);

    this.timer = this.timer + 1;

    if (this.timer > this.maxTimer) {
      this.birdNum = this.birdNum + 1;
      this.timer = 0;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = 0;
    }
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {
  image(splashscreen, 400, 400);

  // ierate through the cars array
  for (var j = 0; j < cars.length; j++) {
    cars[j].display();
    cars[j].drive();

    // test if this car is close to the frog
    if (cars[j].pos.dist(frogPos) < 50) {
      cars.splice(j, 1); //take the car out
      //if the car's type is a killer type, myState = 3 to go to the end screen
    }
  }

  if (cars.length == 0) {
    myTimer = 0; //reset timer
    myState = 3; //won state
  }

  // draw the frog
  ellipse(frogPos.x, frogPos.y, 60, 60);
  checkForKeys();
  image(yoda, frogPos.x, frogPos.y)
}
