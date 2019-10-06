export default p =>
  class Dot {
    constructor(color, x, y, r) {
      this.color = color;
      this.velocity = p.createVector(0, 0);
      this.x = x;
      this.y = y;
      this.r = r;
      this.mass = r / 2000;

      this.tooltipOpen = false;
      this.animation = 0;
    }

    compare = dot2 => {
      let dist = Math.hypot(dot2.x - this.x, dot2.y - this.y);

      if (dist < 1) dist = 1;

      let force = ((dist - 30) * this.mass) / dist;
      return [force * (dot2.x - this.x), force * (dot2.y - this.y)];
    };

    display = (mouseEntered, mouseLeft) => {
      const x = p.mouseX;
      const y = p.mouseY;

      if (Math.abs(x - this.x) < this.r && Math.abs(y - this.y) < this.r) {
        this.tooltipOpen = true;
        mouseEntered({ x, y, type: this.color, value: this.r });
      } else if (this.tooltipOpen) {
        this.tooltipOpen = false;
        mouseLeft();
      }

      p.fill(this.color);
      p.stroke(this.color);
      p.ellipse(this.x, this.y, this.animation * 2, this.animation * 2);

      if (this.animation < this.r) this.animation += 0.05;
    };
  };
