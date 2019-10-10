var bands = ['Blink 182', 'The All-American Rejects', 'Paramore', 'Linkin Park', 'Fall Out Boy', 'Panic! At The Disco'] ;
// just change the names of these and turn in
var aRandomBand = '' ;

function setup() {
  createCanvas(800, 800) ;
  textAlign(CENTER, CENTER) ;
}

function draw() {
  background(100) ;
  textSize(48);
  text(aRandomBand, width/2, height/2) ;
}

function mouseClicked() {

  var i = floor(random(bands.length)) ;  // floor changes the random to an integer

  aRandomBand = bands[i] ;


}
