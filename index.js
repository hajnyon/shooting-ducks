
var ducks = [];
var missed = 0, score = 0;
var missP, scoreP;

var playing = true;

var bg;

/**
 * Preloads images.
 */
function preload() {

  for (let img of images) {
    img.image = loadImage(img.path);
  }
  bg = loadImage("assets/images/bg.png");
}

/**
 * Setup function which inits canvas and other html elements.
 */
function setup() {

  missP = createElement('p', '0/5').class('miss');
  scoreP = createElement('p', '0').class('score');
  createCanvas(700, 520);

}

/**
 * Draws all the contents to canvas.
 */
function draw() {

  if (!playing) {
    return;
  }

  background(bg);
  addDuck();

  for (var i = ducks.length - 1; i >= 0; i--) {

    ducks[i].show();
    ducks[i].move();

    // check if duck left canvas and if so destroy it
    if (ducks[i].x < -20) {
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
  if (add > 98) {

    // add duck
    let duck = new Duck(random(50, 450));
    ducks.push(duck);

  }

}

/**
 * Count missed ducks.
 */
function miss() {

  missed++;
  missP.html(missed + '/5');

  // if 5 missed end game
  if (missed > 4) {
    alert('LOOSER. End of game :(');
    ducks = [];
    playing = false;
  }

}

/**
 * Watch mouse pressed event and check if duck was shot.
 */
function mousePressed() {

  for (var i = ducks.length - 1; i >= 0; i--) {
    if (ducks[i].intersect(mouseX, mouseY)) {
      ducks.splice(i, 1);
      score++;
      scoreP.html(score);
    }
  }

  // prevent default
  return false;
}