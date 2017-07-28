
var ducks = [];
var missed = 0, score = 0;
var missP, scoreP;

var playing = true;

var duck1, duck2;
function preload() {
  duck1 = loadImage("assets/images/kachna1.png");
  duck2 = loadImage("assets/images/kachna2.png");
}

function setup() {

  createCanvas(700, 520);
  missP = createElement('p','').class('miss');
  scoreP = createElement('p','').class('score');

  let duck = new Duck( random(50, 450) );
  ducks.push( duck );

}

function draw() {

  if(!playing) {
    return;
  }

  missP.html(missed + '/5');
  scoreP.html(score);

  background(50);

  addDuck();

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

function addDuck() {

  let add = random(100);

  if(add > 98) {

    let duck = new Duck( random(50, 450) );
    ducks.push(duck);

  }

}

function miss() {

  missed++;
  missP.html(missed + '/5');

  if(missed > 4) {
    alert('end');
    ducks = [];
    playing = false;
  }
  
}

function mousePressed() {
  
  for (var i = ducks.length-1; i >= 0; i--) {
    if( ducks[i].intersect(mouseX, mouseY) ) {
      ducks.splice(i, 1);
      score++;
    }
  }

  // prevent default
  return false;
}