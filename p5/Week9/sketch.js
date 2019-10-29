var myCar;
var myCar1;
var myCar2;

var cars = []; // array of something
var frogPos;

// gyro code
var alpha, beta, gamma; // orientation data
var bunnyImage;
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;
// gyro code

function setup() {
  // put setup code here
  createCanvas(800, 600);

  // myCar = new Car(); // gave birth to a new object
  // myCar1 = new Car();

  for (var i = 0; i < 40; i++) {
    cars.push(new Car(i));
  }

  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  // put drawing code here
  background(100);
  // gyro code
  bunnyImage = loadImage("assets/pika.jpg");
  imageMode(CENTER);
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  image(bunnyImage, 0, 0, 500, 500);
  //  	rect(0, 0, 100, 100) ;
  pop();

  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  noStroke();
  textSize(300);
  textAlign(CENTER);
  text("atk", width / 2, height / 2);
  // gyro code

  for (var i = 0; i < cars.length; i++) {
    cars[i].move();
    cars[i].display();

    var distance = cars[i].pos.dist(frogPos);
    if (distance < 15) {
      // do either this
      cars[i].r = 0;
      cars[i].b = 0;
      cars[i].g = 0
      cars[i].alive = false;
      cars[i].vel = 0;

      // or this
      cars.splice(i, 1) ;


    }
  }


  // for (var i = 0; i < cars.length; i++) {
  //   if (cars[i].alive === false) {
  //     console.log("deleting car " + i ) ;
  //     cars.splice(i, 1) ;
  //   }
  // }


  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

// function mouseReleased() {
//
//
//
//   console.log("beep");
//   // cars.pop(floor(random(cars.length)));
//   console.log("length of car array is " + cars.length);
// }


// function checkForKeys() {
//   //  console.log(keyCode);  // left = 37, etc.
//
//   if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
//   if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
//   if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
//   if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
//
//
// }


// ***********************************
// DEFINE A CLASS CALLED CAR()

function Car(num) {
  // constructor
  // properties are here
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-3, 3), 0);
  this.wide = random(40, 80);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.alive = true ;
  this.name = num ;

  // methods

  this.move = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }

  this.display = function() {
    fill(0);
    textSize(20) ;
    text("car "+this.name, this.pos.x, this.pos.y - 30);
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, this.wide, 20);
    ellipse(this.pos.x - 5, this.pos.y + 20, 20, 20);
    ellipse(this.pos.x + 45, this.pos.y + 20, 20, 20);
  }

  // gyro code

  // HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

  // Read in accelerometer data
  window.addEventListener('deviceorientation', function(e) {
    alpha = e.alpha;
    beta = e.beta;
    gamma = e.gamma;
  });


  // accelerometer Data
  window.addEventListener('devicemotion', function(e) {
    // get accelerometer values
    x = e.acceleration.x;
    y = e.acceleration.y;
    z = e.acceleration.z;
  });
  // gyro code


}
