var myState = 2;    //change back to 0
var timer = 200;
var x = 0;


function setup() {
  // put setup code here
  createCanvas (500, 300);
}

function draw() {
  // put drawing code here
  background('white');
  switch(myState){

    case 0:// fall
    fill("orange");   //sky
    rect(0, 0, 700, 300);

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

    // leaves falling?

    // timer = timer - 1;
    // if (timer <= 0) {
    //   timer = 50;
    //   myState++;
    // }
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

    // hat
    fill(0);
    ellipse(291, 127, 50, 5);
    rect(276, 97, 30, 30);

    // hills
    fill("white");
    // noStroke();
    ellipse(5, 300, 100, 100);
    ellipse(75, 260, 100, 100);
    ellipse(130, 280, 100, 100);

    // snowflakes();

    // add snowflakes

    // timer = timer - 1;
    // if (timer <= 200) {
    //   background(250, 0, 100);
    // }
    // if timer reaches state 2 then reset
    break;

    case 2:// spring
    fill(153, 242, 255);   //light blue
    rect(0, 0, 700, 300);

    fill("yellow");   //sun   turn to light yellow
    ellipse(5, 15, 100, 100);
    triangle(8, 75, 35, 63, 44, 122);   //bottom left and they go up from there
    triangle(63, 17, 64, 0, 116, 11);    //top one

    // clouds
    fill("white");
    ellipse(326, 46, 65, 65);//middle
    ellipse(251, 50, 65, 65);//left
    ellipse(295, 18, 65, 65);//up1
    ellipse(355, 18, 65, 65);//up2
    ellipse(390, 50, 65, 65);//right
    ellipse(295, 80, 65, 65);//bottom2
    ellipse(355, 80, 65, 65);//bottom1


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

    break;

    case 3:// summer
    fill(183, 245, 248);   //sky
    rect(0, 0, 700, 300);

    fill("yellow");   //sun
    ellipse(5, 15, 100, 100);

    triangle(8, 75, 35, 63, 44, 122);   //bottom left and they go up from there
    triangle(49, 53, 63, 30, 103, 69);
    triangle(63, 17, 64, 0, 116, 11);    //top one

    // timer = timer - 1;
    // if (timer <= 0) {
    //   timer = 50;
    //   myState++;
    // }

    break;

    case 4:
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
    //add smoke?

    fill("orange");
    rect(275, 198, 40, 65); //door

    rect(173, 149, 50, 50); //left window
    rect(375, 149, 50, 50); //right window

    // timer = timer - 1;
    // if (timer <= 0) {
    //   timer = 50;
    //   myState++;
    // }
    break;

  }

}

function mouseReleased() {
  myState++;
  if (myState > 5) {
    myState = 0;
  }

  function snowflakes() {
    ellipse(10, y, 10, 10);
    if (y > width) {
      x = -200;
    }
  }
  // if (myState == 0) {   // this makes sure that myState is at 0
  //   myState = 1;
  // function Mytimer() {
  //   timer = timer - 1;
  //   if (timer <= 0) {
  //     timer = 200;
  //
  //   }
  // }

  console.log(mouseX + "," + mouseY);   //take out later
}




// 1 hour basic set up and brain storming
// 2 hours designing the basics for the pages
//1 hour adding timer and working on house
//3 hours on flower and stuff
