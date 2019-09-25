import React, { Component } from "react";
import P5 from "react-p5-wrapper";

class Visualization extends Component {
  sketch = p => {
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
    };

    p.draw = () => {
      p.background(0);
    };
  };

  render() {
    return <P5 sketch={this.sketch} />;
  }
}

export default Visualization;
