
var ducks = [];
var missed = 0, score = 0;
var missP, scoreP;

var playing = true;

var duck1, duck2, bg;
/**
 * Preloads images.
 */
function preload() {
  duck1 = loadImage("assets/images/kachna1.png");
  duck2 = loadImage("assets/images/kachna2.png");
  bg = loadImage("assets/images/bg.png");
}

/**
 * Setup function which inits canvas and other html elements.
 */
function setup() {

  missP = createElement('p','0/5').class('miss');
  scoreP = createElement('p','0').class('score');
  createCanvas(700, 520);

}

/**
 * Draws all the contents to canvas.
 */
function draw() {

  // if game ends stop drawing
  if(!playing) {
    return;
  }

  // background image
  background(bg);

  // add new duck
  addDuck();

  // loop all ducks display and move them
  for (var i = ducks.length-1; i >= 0; i--) {
    
    ducks[i].show();
    ducks[i].move();
    
    // check if duck left canvas and if so destroy it
    if( ducks[i].x < -20 ) {
      ducks.splice(i, 1);
      miss();
    }
  }

}

/**
 * Adds new duck.
 * 
 */
function addDuck() {

  let add = random(100);

  // canvas runs in 60fps so 2% chance is enough
  if(add > 98) {

    // add duck
    let duck = new Duck( random(50, 450) );
    ducks.push(duck);

  }

}

/**
 * Count missed ducks.
 */
function miss() {

  // increment
  missed++;
  // update count
  missP.html(missed + '/5');

  // if 5 missed end game
  if(missed > 4) {
    alert('end');
    ducks = [];
    playing = false;
  }
  
}

/**
 * Watch mouse pressed event and check if duck was shot.
 */
function mousePressed() {
  
  // loop ducks
  for (var i = ducks.length-1; i >= 0; i--) {

    // check if mouse is on target and if so destroy the duck and increment score
    if( ducks[i].intersect(mouseX, mouseY) ) {
      ducks.splice(i, 1);
      score++;
      scoreP.html(score);      
    }
  }

  // prevent default
  return false;
}