import isEqual from "lodash/isEqual";
import _Session from "./Session";

import { colorToCategory } from "../../lib/constants";

export default p => {
  const Session = _Session(p);

  p.disableFriendlyErrors = true;

  let data = {};
  let sessions = [];
  let drawnSessions = [];
  let tooltip = { x: 0, y: 0, size: 0, type: "" };
  let width, height;

  p.setup = () => {
    p.createCanvas(width, height);
    p.textSize(12);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = props => {
    if (!isEqual(props.data, data)) {
      data = props.data;
      processData(data);
    }

    if (props.width || props.height) {
      width = props.width;
      height = props.height;

      p.resizeCanvas(width, height);
    }
  };

  const mouseEntered = tooltipData => {
    tooltip = tooltipData;
  };

  const mouseLeft = () => {
    tooltip = { x: 0, y: 0 };
  };

  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  const distribute = (length, value) => {
    if (length <= 1) return [value];
    if (value <= 5) return [value].concat(distribute(length - 1, 0));

    const half = Math.floor(length / 2);

    const dist = Math.min(
      value,
      Math.max(
        value / length,
        Math.floor(value / 2 + ((Math.random() - 0.5) * value) / length)
      )
    );

    return shuffle(
      distribute(half, dist).concat(distribute(length - half, value - dist))
    );
  };

  const updateDrawnSessions = () => {
    drawnSessions.push(sessions.pop());
  };

  const processData = ({ pickups, notifications, categories }) => {
    sessions = [];
    drawnSessions = [];

    // pickups = 1;
    // notifications = 3;
    // categories = {
    //   social: 10,
    //   entertainment: 12,
    //   productivity: 14
    // };

    if (pickups) {
      const distributed = {};
      Object.keys(categories).map(
        category =>
          (distributed[category] = distribute(pickups, categories[category]))
      );

      for (let i = 0; i < pickups; i++) {
        const formatted = {};
        Object.keys(categories).map(
          category => (formatted[category] = distributed[category][i])
        );

        // console.log(formatted);

        sessions.push(
          new Session(width, height, notifications / pickups, formatted)
        );
      }
    }
  };

  p.draw = () => {
    p.background(0);

    if (!(p.frameCount % 15) && sessions.length) {
      updateDrawnSessions();
    }

    if (drawnSessions.length) {
      drawnSessions.forEach(session => {
        session.display(mouseEntered, mouseLeft);
      });
    }

    if (tooltip.x && tooltip.y) {
      const type = colorToCategory[tooltip.type];
      let string;
      if (type === "pickups" || type === "notifications") {
        string = `${type.substring(0, type.length - 1)}`;
      } else {
        string = `${type} ${tooltip.value / 3} minutes`;
      }

      const metrics = p.canvas.getContext("2d").measureText(string);

      p.strokeWeight(1);
      p.stroke(255);
      p.fill(0);

      p.rect(tooltip.x + 10, tooltip.y - 10, metrics.width + 20, 32);

      p.strokeWeight(0);
      p.fill(255);

      p.text(string, tooltip.x + 20, tooltip.y + 10);
    }
  };
};
