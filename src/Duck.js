/**
 * Implements duck class.
 * 
 * @class Duck
 */
class Duck {
  
  /**
   * Creates an instance of Duck.
   * @param {Integer} y Y coord of duck.
   * @memberof Duck
   */
  constructor(y) {
    this.x = width + 20; // X coord (always behind canvas)
    this.y = y; // Y coord
    this.r = 30; // radius
    this.type = random([true, false]); // one of two type of ducks
  }

  /**
   * Draws duck to canvas.
   * 
   * @memberof Duck
   */
  show() {

    // no stroke 
    noStroke();
    // add transparent color
    fill(255, 0);
    // draw ellipse
    ellipse(this.x, this.y, this.r*2, this.r*2);
    // set one of the images and move it so its about in center
    image(this.type ? duck1 : duck2, this.x - 25, this.y - 30);
    
  }

  /**
   * Moves the duck.
   * 
   * @memberof Duck
   */
  move() {
    // move it to the left TODO: add speed, gravity simulation etc.
    this.x = this.x - 2;
  }

  /**
   * Checks if duck intersects with suplied coordinates.
   * 
   * @param {Integer} x X coord.
   * @param {Integer} y Y coord
   * @returns True if intersects false otherwise.
   * @memberof Duck
   */
  intersect(x, y) {

    // dummy check TODO: add checking by shape
    if(x < this.x + this.r && y < this.y + this.r &&
       x > this.x - this.r && y > this.y - this.r) {
      return true;
    } else {
      return false;
    }

  }

}