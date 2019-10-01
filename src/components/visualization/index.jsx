import { categoryToColor } from "../../lib/constants";

import Session from "./Session";

export default p => {
  let width, height;
  let data = {};
  let sessions = [];

  p.setup = () => {
    p.createCanvas(width, height);
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

  const processData = data => {
    const { notifications, pickups } = data;

    for (let i = 0; i < notifications; i++) {
      sessions.push();
    }
  };

  p.draw = () => {
    p.background(0);

    sessions.forEach(session => session.display(p));
  };
};
