class Dot {
  constructor(color, x, y, r) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.r = r;
  }

  display(p) {
    p.fill(this.color);
    p.stroke(this.color);
    p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}

export default Dot;
