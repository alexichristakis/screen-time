import Heap from "heap-js";

import _Dot from "./Dot";
import { categoryToColor } from "../../lib/constants";

export default p => {
  const Dot = _Dot(p);

  return class Session {
    constructor(width, height, notifications, categories) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;

      this.dots = [new Dot(categoryToColor.pickups, this.x, this.y, 7)];

      for (var i = 0; i < notifications; i++) {
        this.dots.push(
          new Dot(
            categoryToColor.notifications,
            Math.random() * width,
            Math.random() * height,
            5
          )
        );
      }

      Object.keys(categories).forEach(category => {
        const size = categories[category];

        this.dots.push(
          new Dot(
            categoryToColor[category],
            Math.random() * width,
            Math.random() * height,
            size
          )
        );
      });
    }

    static overlap(s1, s2) {}

    display = () => {
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

            dot1.x += dot1.velocity.x;
            dot1.y += dot1.velocity.y;
          }
        });
      });

      this.dots.forEach((dot, i) => {
        dot.display(p);
      });
    };
  };
};
