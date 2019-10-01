import Session from "./Session";

export default p => {
  const WrappedSession = Session(p);
  p.disableFriendlyErrors = true;

  let data = {};
  let sessions = [];
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

  const distribute = (length, value) => {
    if (length <= 1) return [value];
    const half = Math.floor(length / 2);
    const dist = Math.floor(Math.random() * value);

    return distribute(half, dist).concat(
      distribute(length - half, value - dist)
    );
  };

  const generatePickupCategories = () => {};

  const processData = ({ pickups, notifications, categories }) => {
    sessions = [];

    // const pickups = 165;
    // const social = 85 * 15;
    // const entertainment = 90 * 15;
    // const reading = 45 * 15;

    // const notifications = distribute(pickups, 400);
    // console.log(notifications);
    // const cat1 = distribute(pickups, social);
    // const cat2 = distribute(pickups, entertainment);
    // const cat3 = distribute(pickups, reading);
    // console.log(cat1);

    for (let i = 0; i < pickups; i++) {
      const session = {};
      Object.keys(categories).map(
        category => (session[category] = categories[category] / pickups)
      );

      // console.log(session);

      sessions.push(
        new WrappedSession(width, height, notifications / pickups, session)
      );
    }
  };

  p.draw = () => {
    p.background(0);

    // if (!(p.frameCount % 100)) {
    //   updateDrawnDots(dots, drawnDots);
    // }

    let fps = p.frameRate();
    p.fill(255);
    p.stroke(0);
    p.text("FPS: " + fps.toFixed(2), width - 100, height - 100);

    // drawDots(dots);
    sessions.forEach(session => {
      session.display();
    });
  };
};
