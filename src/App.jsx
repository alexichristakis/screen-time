import React, { Component } from "react";
import styled from "styled-components";
import P5 from "react-p5-wrapper";

import sketch from "./components/visualization";
import Form from "./components/form";
import Clear from "./components/Clear";
import Help from "./components/help";
import Quotes from "./components/quotes";

const Container = styled.div`
  background-color: black;
`;

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
      <Container>
        <Form onSubmit={this.handleSubmit} />
        <P5 width={width} height={height} data={data} sketch={sketch} />
        {Object.entries(data).length && <Quotes />}
        <Help />
        <Clear data={data} onClick={() => this.setState({ data: {} })} />
      </Container>
    );
  }
}

export default App;
