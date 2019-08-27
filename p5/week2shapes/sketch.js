function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400); // size of the canvas and always starts at setup
  background(0); // 1 number is gray scale, 0-255, hexcode works too (rgb), hexadecible works too ('#numbers')
  noStroke(); // means no line around shapes

  fill(204);// fills color for triangle, if you have a fill command everything below it will be filled with that color. for the shapes below it
  triangle(18, 18, 18, 360, 81, 360); // 0,0 is top left corner

  fill(0, 230, 0);
  rect(0, 0, 100, 200);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(252, 144, 72, 72);

  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);
}
