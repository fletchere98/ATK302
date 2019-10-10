var myCar; //declair
var myCar1;
var myCar2;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  myCar = new Car(); // spawn one object     myCar is the var and Car is the function
  myCar1 = new Car();
  myCar2 = new Car();
}

function draw() {
  // put drawing code here
  background('white');
  myCar.display(); //instead of this.display put the var.display
  myCar.drive();

  myCar1.display(); //instead of this.display put the var.display
  myCar1.drive();

  myCar2.display(); //instead of this.display put the var.display
  myCar2.drive();

}


// our car class
function Car() {
  // atributes
  this.x = random(width);
  this.y = random(height);
  // add an r, g, b, and vel
  this.vel = random(5);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 100, 50);

  }

  this.drive = function() {
    this.x = this.x + this.vel;
    if (this.x > width){
      this.x = 0;
    }

  }
}
