import { categoryToColor } from "../../lib/constants";

import Dot from "./Dot";

export default p => {
  let data = {};
  let dots = [];
  let velocities = [];
  let mass = [];
  let width, height;

  p.setup = () => {
    p.createCanvas(width, height);
  };

  const generateSize = key => {
    if (key === "notifications") {
      return 7;
    }

    if (key === "pickups") {
      return 10;
    }

    return 20 * Math.random() + 5;
  };

  const processData = data => {
    dots = [];
    Object.keys(data).forEach(key => {
      let value = data[key];
      while (value > 0) {
        const size = generateSize(key);
        dots.push(
          new Dot(
            categoryToColor[key],
            width * Math.random(),
            height * Math.random(),
            size
          )
        );

        if (key === "notifications" || key === "pickups") {
          value -= 1;
        } else {
          value -= size;
        }
      }
    });

    velocities = dots.map(_ => p.createVector(0, 0));
    mass = dots.map(({ r }) => 0.0003 * r);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = props => {
    if (props.data) {
      data = props.data;
      processData(data);
    }

    if (props.width || props.height) {
      width = props.width;
      height = props.height;

      p.resizeCanvas(width, height);
    }
  };

  p.draw = () => {
    p.background(0);
    dots.forEach((dot1, i) => {
      let accelerationX = 0,
        accelerationY = 0;
      dots.forEach((dot2, j) => {
        if (i !== j) {
          let distX = dot2.x - dot1.x;
          let distY = dot2.y - dot1.y;
          let dist = Math.sqrt(distX * distX + distY * distY);
          if (dist < 1) dist = 1;

          let force = ((dist - 320) * mass[j]) / dist;
          accelerationX += force * distX;
          accelerationY += force * distY;
        }
      });

      velocities[i].x *= 0.99;
      velocities[i].y *= 0.99;

      velocities[i].x += accelerationX * mass[i];
      velocities[i].y += accelerationY * mass[i];
    });

    dots.forEach((dot, i) => {
      dot.x += velocities[i].x;
      dot.y += velocities[i].y;

      dot.display(p);
    });
  };
};
