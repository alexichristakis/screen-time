import React, { Component } from "react";
import Visualization from "./components/visualization";
import Form from "./components/form";
import "./App.css";

class App extends Component {
  state = {
    data: {}
  };

  handleSubmit = data => {
    this.setState({ data });
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit} />
        <Visualization />
      </div>
    );
  }
}

export default App;
