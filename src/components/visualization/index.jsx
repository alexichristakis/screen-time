import _Session from "./Session";

export default p => {
  const Session = _Session(p);

  p.disableFriendlyErrors = true;

  let data = {};
  let sessions = [];
  let drawnSessions = [];
  let width, height;

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

    // pickups = 100;
    // notifications = 100;
    // categories = {
    //   social: 65,
    //   entertainment: 65,
    //   productivity: 65
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

        sessions.push(
          new Session(width, height, notifications / pickups, formatted)
        );
      }
    }
  };

  p.draw = () => {
    p.background(0);

    if (!(p.frameCount % 30) && sessions.length) {
      updateDrawnSessions();
    }

    if (drawnSessions.length)
      drawnSessions.forEach(session => {
        session.display();
      });
  };
};
