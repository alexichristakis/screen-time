import React, { Component } from "react";
import P5 from "react-p5-wrapper";

import Form from "./components/form";
import sketch from "./components/visualization";

class App extends Component {
  state = {
    data: {},
    screen: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleSubmit = data => {
    this.setState({ data });
  };

  render() {
    const {
      data,
      screen: { width, height }
    } = this.state;

    return (
      <>
        {/* <button
          onClick={() => {
            console.log("pressed");
            this.setState({
              data: {
                social: 105,
                productivity: 200,
                reading: 135,
                pickups: 100,
                notifications: 400
              }
            });
          }}
        >
          hello
        </button> */}
        <div className="App">
          <Form onSubmit={this.handleSubmit} />

          <P5 width={width} height={height} data={data} sketch={sketch} />
        </div>
      </>
    );
  }
}

export default App;
