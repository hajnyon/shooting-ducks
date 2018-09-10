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
    this.gravity = 1;
    this.type = random(images);
  }

  /**
   * Draws duck to canvas.
   *
   * @memberof Duck
   */
  show() {

    noStroke();
    fill(255, 0);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    image(this.type.image, this.x - 25, this.y - 30, 50, 50);

  }

  /**
   * Moves the duck.
   *
   * @memberof Duck
   */
  move() {
    // TODO: add speed, gravity simulation etc.
    this.x = this.x - 2;
    this.y += this.gravity;
    this.gravity += 0.15;
    if (this.gravity > 5) {
      this.gravity = 0;
      this.y -= 85;
    }
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
    if (x < this.x + this.r && y < this.y + this.r &&
      x > this.x - this.r && y > this.y - this.r) {
      return true;
    } else {
      return false;
    }

  }

}