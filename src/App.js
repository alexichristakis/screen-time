import React, { Component } from "react";
import Visualization from "./components/visualization";
import Form from "./components/form";

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
      <div className="App">
        <Form onSubmit={this.handleSubmit} />
        <Visualization data={data} width={width} height={height} />
      </div>
    );
  }
}

export default App;
