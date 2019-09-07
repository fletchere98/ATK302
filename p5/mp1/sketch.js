function setup() {
  // put setup code here
  createCanvas (windowWidth, windowHeight);
}

function draw() {
  background(180, 150, 0);
  fill(0);

  if (mouseIsPressed) {
    //the pressed down state


        //ellipse for fluff ball

    fill (150)
  ellipse(379, 678, 50, 300);   // left leg
  ellipse(503, 678, 50, 300);   //right leg
  ellipse(443, 500, 220, 300);   //body

  fill (150)
  ellipse(445, 330, 150, 150);  //head

  fill (0, 100, 200)    //eyes    blue?
  ellipse(470, 310, 10, 10);
  ellipse(420, 310, 10, 10);


  fill (160);
  ellipse(515, 472, 100, 50);   //right arm   Gray?

  fill (160);
  ellipse(370, 472, 100, 50);   //left arm



  fill(150);
  triangle(460, 258, 504, 284, 500, 221);  //right ear , left, right, top

  fill(200, 60, 150);
  triangle(473, 254, 495, 269, 494, 235);  // right ear inner  (left, left, right, right, top, top)

  fill(150);
  triangle(394, 275, 433, 255, 395, 227);  // left ear

  fill(200, 60, 150);
  triangle(400, 264, 421, 252, 399, 236); // left inner ear

  }

  else {


    //start here, copy code to if and change cordinents
    //width/2, height/2 is to make things in the middle of the screen

        //rect for armored fluff ball

        background(30, 30, 200);

      fill (30)
    rect(370, 593, 50, 200);   // left leg
    rect(480, 593, 50, 200);   //right leg
    rect(340, 380, 220, 300);   //body

    fill (30)
    rect(375, 250, 150, 150);  //head

    fill (0, 100, 200)    //eyes    blue?
    ellipse(476, 310, 10, 10);
    ellipse(423, 310, 10, 10);


    fill (50);
    rect(520, 447, 100, 50);   //right arm   Gray?

    fill (110, 40, 0);
    ellipse(600, 472, 25, 25);    //Paws    Brown?

    fill (50);
    rect(270, 447, 100, 50);   //left arm

    fill (110, 40, 0);
    ellipse(292, 472, 25, 25);    //Paws

    fill(150);
    triangle(466, 251, 525, 250, 497, 197);  //right ear , left, right, top

    fill(200, 60, 150);
    triangle(480, 243, 513, 243, 496, 213);  // right ear inner  (left, left, right, right, top, top)

    fill(150);
    triangle(373, 250, 435, 250, 401, 197);  // left ear
    fill(200, 60, 150);
    triangle(401, 211, 420, 242, 384, 242); // left inner ear


  }

  // fill(255);
  // text(mouseX + "," + mouseY, 20, 20);

}

// function mouseReleased() {
//     console.log(mouseX + "," + mouseY);
//
// }


// 1 1/2 hour trying to get internet to work and looking for inspiration
// 1 1/2 hours with basic design
// 2 hours on design
// 3 hours on design and colors
