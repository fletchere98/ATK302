var timer = 100;
var myState = 0;

function setup() {
  // put setup code here
  createCanvas (400, 400);
}

function draw() {
  // put drawing code here


  switch(myState) {

      case 0:
      background(150);
      text("What’s the best thing about Switzerland?", 50, 100, 100);
      fill("blue");
      textSize(25);

         break ;


      case 1:
      background(150);
      text("I don’t know, but the flag is a big plus.", 50, 100, 100);
         break ;


  }
  timer++;
  if (timer >= 200) {
    timer = 0;
    myState = myState + 1;
}
}


  function mouseReleased() {
    myState++;

    if (myState > 1) {
      myState = 0;
    }

}
