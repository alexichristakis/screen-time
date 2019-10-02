export default p =>
  class Dot {
    constructor(color, x, y, r) {
      this.color = color;
      this.velocity = p.createVector(0, 0);
      this.x = x;
      this.y = y;
      this.r = r;
      this.mass = r / 2000;

      this.animation = 0;
    }

    compare = dot2 => {
      const { mass } = dot2;

      let dist = Math.hypot(dot2.x - this.x, dot2.y - this.y);

      if (dist < 1) dist = 1;

      let force = ((dist - 30) * this.mass) / dist;
      return [force * (dot2.x - this.x), force * (dot2.y - this.y)];
    };

    display = () => {
      p.fill(this.color);
      p.stroke(this.color);
      p.ellipse(this.x, this.y, this.animation * 2, this.animation * 2);

      if (this.animation < this.r) this.animation += 0.05;
    };
  };
