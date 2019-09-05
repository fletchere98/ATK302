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



  }

  else {

    //the mouse pressed state
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


  }

  fill(255);
  text(mouseX + "," + mouseY, 20, 20);

}

function mouseReleased() {
    console.log(mouseX + "," + mouseY);

}


// 1 hour trying to get internet to works
// 1 1/2 hours with basic design


      // 250, 250, 250  white

      //     rect(356, 593, 50, 200);   // left leg
          // rect(477, 593, 50, 200);   //right leg
          // ellipse(443, 500, 220, 300);   //body
          //
          // fill (250, 250, 250)
          // ellipse(445, 330, 100, 150);  //head
          //
          // fill (0)    //eyes
          // ellipse(470, 310, 10, 10);
          // ellipse(420, 310, 10, 10);
          //
          //
          // fill (0);
          // ellipse(570, 472, 100, 50);   //right arm
          // ellipse(320, 472, 100, 50);   //left arm


      // fill(204);// fills color for triangle, if you have a fill command everything below it will be filled with that color. for the shapes below it
      // triangle(18, 18, 18, 360, 81, 360); // 0,0 is top left corner
      //
      // fill(0, 230, 0);
      // rect(0, 0, 100, 200);
      //
      // fill(204);
      // quad(189, 18, 216, 18, 216, 360, 144, 360);
      //
      // fill(255);
      // ellipse(252, 144, 72, 72);
      //
      // fill(204);
      // triangle(288, 18, 351, 360, 288, 360);
      //
      // fill(255);
      // arc(479, 300, 280, 280, PI, TWO_PI);
