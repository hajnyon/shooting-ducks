

class Duck {
  
  constructor(y) {
    this.x = width;
    this.y = y;
    this.r = 30;
    this.type = random([true, false]);
  }

  show() {
    noStroke();
    fill(50, 50);
    ellipse(this.x, this.y, this.r*2, this.r*2);
    
    image(this.type ? duck1 : duck2, this.x - 25, this.y - 30);
  }

  move() {
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