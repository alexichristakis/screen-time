import _Dot from "./Dot";
import { categoryToColor } from "../../lib/constants";

export default p => {
  const Dot = _Dot(p);

  return class Session {
    constructor(width, height, notifications, categories) {
      this.finished = false;

      const { x, y } = this.randomPoint(width, height);
      this.x = x;
      this.y = y;

      this.dots = [new Dot(categoryToColor.pickups, this.x, this.y, 7)];

      for (var i = 0; i < notifications; i++) {
        const { x, y } = this.randomPoint(width, height);
        this.dots.push(new Dot(categoryToColor.notifications, x, y, 5));
      }

      Object.keys(categories).forEach(category => {
        const size = categories[category];

        if (size) {
          const { x, y } = this.randomPoint(width, height);
          this.dots.push(new Dot(categoryToColor[category], x, y, size * 3));
        }
      });
    }

    randomPoint = (width, height) => ({
      x: p.random(200, width - 200),
      y: p.random(200, height - 200)
    });

    display = (mouseEntered, mouseLeft) => {
      if (!this.finished) {
        let changes = [];
        this.dots.forEach((dot1, i) => {
          let accelerationX = 0,
            accelerationY = 0;
          this.dots.forEach((dot2, j) => {
            if (i !== j) {
              const [accelX, accelY] = dot1.compare(dot2);
              accelerationX += accelX;
              accelerationY += accelY;

              dot1.velocity.x =
                dot1.velocity.x * 0.99 + accelerationX * dot1.mass;
              dot1.velocity.y =
                dot1.velocity.y * 0.99 + accelerationY * dot1.mass;

              const delta = Math.hypot(dot1.velocity.x, dot1.velocity.y);
              changes.push(delta);

              dot1.x += dot1.velocity.x;
              dot1.y += dot1.velocity.y;
            }
          });
        });

        if (Math.max(...changes) <= 0.005) {
          this.finished = true;
        }
      }

      this.dots.forEach((dot, i) => {
        dot.display(mouseEntered, mouseLeft);
      });
    };
  };
};
