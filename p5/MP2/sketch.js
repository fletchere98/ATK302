var myState = 0;
var timer = 200;
var song1;
let snowflakes = []; // array to hold snowflake objects

// function preload() {
//   song1 = loadSound('assets/DaydreamBlissSYBS.mp3');
//   song1.loop();
//   song1.stop();
// }


function setup() {
  // put setup code here
  createCanvas (windowWidth, windowHeight);
    // song1.loop();
}

function draw() {
  // put drawing code here

  scale(2);
  background('white');
  switch(myState){

    case 0:// fall
    // Song.play();
    fill("orange");   //sky
    rect(0, 0, 700, 300);

    fill("green");
    rect(0, 280, 700, 300);

    fill("yellow");   //sun
    ellipse(5, 15, 100, 100);

    triangle(8, 75, 35, 63, 44, 122);   //bottom left and they go up from there
    triangle(49, 53, 63, 30, 103, 69);
    triangle(63, 17, 64, 0, 116, 11);    //top one

    // tree
    fill(139,69,19);
    rect(260, 200, 50, 100);

    //leaves
    fill(0, 230, 0);  //change to red and orange
    ellipse(285, 150, 100, 100);  //middle
    ellipse(240, 200, 100, 100);  //left
    ellipse(330, 200, 100, 100);  //right

    // tree
    fill(139,69,19);
    rect(500, 200, 50, 100);

    //leaves
    fill(0, 230, 0);  //change to red and orange
    ellipse(490, 200, 100, 100);  //left
    ellipse(520, 160, 100, 100);  //middle
    ellipse(560, 200, 100, 100);  //right

    fill("red");
    ellipse(200, 315, 10, 5);
    ellipse(250, 350, 10, 5);
    ellipse(200, 300, 10, 5);
    ellipse(230, 310, 10, 5);
    ellipse(300, 320, 10, 5);
    ellipse(400, 300, 10, 5);
    ellipse(500, 350, 10, 5);
    ellipse(450, 320, 10, 5);
    ellipse(550, 315, 10, 5);

    fill("orange");
    ellipse(220, 315, 10, 5);
    ellipse(225, 335, 10, 5);
    ellipse(250, 330, 10, 5);
    ellipse(300, 335, 10, 5);
    ellipse(340, 320, 10, 5);
    ellipse(400, 320, 10, 5);
    ellipse(500, 315, 10, 5);
    ellipse(450, 345, 10, 5);
    ellipse(550, 340, 10, 5);

    fill("red");
    noStroke();
    ellipse(202, 209, 10, 10);
    ellipse(225, 220, 10, 10);
    ellipse(240, 235, 10, 10);
    ellipse(215, 190, 10, 10);
    ellipse(240, 180, 10, 10);
    ellipse(260, 200, 10, 10);

    ellipse(300, 209, 10, 10);
    ellipse(310, 190, 10, 10);
    ellipse(350, 207, 10, 10);
    ellipse(320, 209, 10, 10);
    ellipse(450, 209, 10, 10);
    ellipse(470, 215, 10, 10);
    ellipse(475, 200, 10, 10);
    ellipse(335, 180, 10, 10);
    ellipse(455, 190, 10, 10);
    ellipse(550, 209, 10, 10);
    ellipse(570, 200, 10, 10);
    ellipse(545, 180, 10, 10);
    ellipse(575, 175, 10, 10);
    ellipse(485, 230, 10, 10);
    stroke(1);

    fill("red");

    text('Click when ready for the next season or click on an apple', 280, 20);

    break;

    case 1:// winter
    fill(9, 200, 229);   //light blue
    rect(0, 0, 700, 300);

    fill("yellow");   //sun   turn to light yellow
    ellipse(5, 15, 100, 100);

    //snowman

    fill("white");
    ellipse(291, 150, 50, 50);   //top
    ellipse(291, 200, 70, 70);  //middle
    ellipse(291, 250, 100, 100);  //bottom

    // eyes
    fill(0);
    ellipse(283, 143, 5, 5);
    ellipse(299, 142, 5, 5);
    ellipse(290, 155, 5, 5);

    // hat
    fill(0);
    ellipse(291, 127, 50, 5);
    rect(276, 97, 30, 30);

    // hills
    noStroke();
    fill("white");
    ellipse(5, 300, 100, 100);
    ellipse(75, 260, 100, 100);
    ellipse(130, 280, 100, 100);

    stroke(0);
    strokeWeight(1);

    let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

    fill("white");
    text('Click when ready for the next season', 350, 20);
    break;

    case 2:
    // house
    fill("blue");
    rect(0, 0, 600, 200);

    fill("green");
    rect(0, 201, 600, 200);

    fill("brown");
    rect(150, 120, 300, 143); //house

    triangle(150, 120, 450, 120, 305, 0); //roof

    fill(150);
    rect(200, 25, 30, 70);  //chim
    ellipse(220, 18, 10, 10);
    ellipse(202, 12, 10, 10);

    fill("orange");
    rect(275, 198, 40, 65); //door

    fill("black");
    ellipse(310, 234, 10, 10);

    fill("orange");
    rect(170, 149, 50, 50); //left window


    rect(375, 149, 50, 50); //right window

    fill("black");  //left
    ellipse(195, 175, 5, 50);
    ellipse(195, 174, 50, 5);

    //right
    ellipse(399, 175, 5, 50);
    ellipse(399, 174, 50, 5);

    fill("white");   //moon
    ellipse(5, 15, 100, 100);

    timer = timer - 1;
    if (timer <= 0) {
      timer = 50;
      myState++;
    }
    break;

    case 3:// spring
    fill(153, 242, 255);   //light blue
    rect(0, 0, 700, 300);

    fill("green");
    rect(0, 220, 700, 150);

    fill("yellow");   //sun   turn to light yellow
    ellipse(5, 15, 100, 100);
    triangle(8, 75, 35, 63, 44, 122);   //bottom left and they go up from there
    triangle(63, 17, 64, 0, 116, 11);    //top one

    // clouds
    noStroke();
    fill("white");
    ellipse(326, 46, 65, 65);//middle
    ellipse(251, 50, 65, 65);//left
    ellipse(295, 18, 65, 65);//up1
    ellipse(355, 18, 65, 65);//up2
    ellipse(390, 50, 65, 65);//right
    ellipse(295, 80, 65, 65);//bottom2
    ellipse(355, 80, 65, 65);//bottom1

    stroke(0);
    strokeWeight(1);


    // flowers

    //left flower
    fill("green");
    rect(18, 283, 7, 20);
    fill("purple");
    ellipse(15, 280, 10, 10);   //left
    ellipse(21, 275, 10, 10);   //up
    ellipse(26, 280, 10, 10);   //down
    ellipse(21, 285, 10, 10);   //bottom

    fill("green");
    rect(43, 283, 7, 20);
    fill("yellow");
    ellipse(40, 280, 10, 10);   //left
    ellipse(46, 275, 10, 10);   //up
    ellipse(51, 280, 10, 10);   //down
    ellipse(46, 285, 10, 10);   //bottom

    fill("green");
    rect(66, 283, 7, 20);
    fill("orange");
    ellipse(64, 280, 10, 10);   //left
    ellipse(70, 275, 10, 10);   //up
    ellipse(76, 280, 10, 10);   //down
    ellipse(70, 285, 10, 10);   //bottom

    fill("green");
    rect(94, 283, 7, 20);
    fill("blue");
    ellipse(92, 280, 10, 10);   //left
    ellipse(97, 275, 10, 10);   //up
    ellipse(102, 280, 10, 10);   //down
    ellipse(97, 285, 10, 10);   //bottom

    fill("green");
    rect(185, 283, 7, 20);
    fill("pink");
    ellipse(183, 280, 10, 10);   //left
    ellipse(188, 275, 10, 10);   //up
    ellipse(193, 280, 10, 10);   //down
    ellipse(188, 285, 10, 10);   //bottom

    fill("green");
    rect(236, 283, 7, 20);
    fill("red");
    ellipse(233, 280, 10, 10);   //left
    ellipse(239, 275, 10, 10);   //up
    ellipse(244, 280, 10, 10);   //down
    ellipse(239, 285, 10, 10);   //bottom

    fill("green");
    rect(305, 283, 7, 20);
    fill("yellow");
    ellipse(303, 280, 10, 10);   //left
    ellipse(308, 275, 10, 10);   //up
    ellipse(313, 280, 10, 10);   //down
    ellipse(308, 285, 10, 10);   //bottom

    fill("green");
    rect(336, 283, 7, 20);
    fill("blue");
    ellipse(334, 280, 10, 10);   //left
    ellipse(340, 275, 10, 10);   //up
    ellipse(344, 280, 10, 10);   //down
    ellipse(340, 285, 10, 10);   //bottom

    fill("green");
    rect(373, 283, 7, 20);
    fill("pink");
    ellipse(371, 280, 10, 10);   //left
    ellipse(377, 275, 10, 10);   //up
    ellipse(381, 280, 10, 10);   //down
    ellipse(377, 285, 10, 10);   //bottom

    fill("white");
    text('Click when ready for the next season', 350, 20);
    break;

    case 4:// summer
    fill(255, 166, 11);   //sky
    rect(0, 0, 700, 300);

    fill("yellow");   //sun
    ellipse(5, 15, 100, 100);

    triangle(8, 75, 35, 63, 44, 122);   //bottom left and they go up from there
    triangle(49, 53, 63, 30, 103, 69);
    triangle(63, 17, 64, 0, 116, 11);    //top one

    noStroke();
    fill(123, 227, 241);
    rect(0, 150, 700, 100);

    fill(254, 242, 161);
    rect(0, 250, 700, 100);

    stroke(1);

    //ellipse for fluff ball

fill (150)
ellipse(330, 300, 15, 50);   // left leg
ellipse(370, 300, 15, 50);   //right leg
ellipse(350, 270, 60, 75);   //body

fill (150)
ellipse(350, 225, 75, 75);  //head

fill(150);
triangle(320, 207, 340, 193, 320, 180);  //right ear , left, right, top

fill(150);
triangle(350, 193, 372, 204, 373, 180);  // left ear

    timer = timer - 1;
    if (timer <= 0) {
      timer = 100;
      myState++;
    }

    break;

    // case 5:
    // song1.play();
    // break;
  }

}

function mouseReleased() {
  myState++;
  if (myState > 4) {
    myState = 0;
  }
  console.log(mouseX + "," + mouseY);   //take out later
}

  // snowflake class    This code is from p5js examples
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0; // angular speed   Changed the speed to 0
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  }

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  }
}



// 1 hour basic set up and brain storming
// 2 hours designing the basics for the pages
//1 hour adding timer and working on house
//3 hours on flower and stuff
//4 hours with snowflakes, scale, adding details, moving stuff around and adding text
//3 hours on details, finding music, and trying to get the music to work
//2 hours working on final details and adding in extra parts
