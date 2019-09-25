import React, { Component } from "react";
import styled from "styled-components";

import { timeValidate, numberValidate } from "../../lib/utils";

import SubmitButton from "./SubmitButton";
import NumberInput from "./NumberInput";
import Category from "./Category";

const Container = styled.div`
  position: absolute;
  padding: 20px;
  width: 50%;
`;

const Spacer = styled.div`
  height: 10px;
`;

class Form extends Component {
  state = {
    categories: {
      0: { time: "", category: 0 },
      1: { time: "", category: 0 },
      2: { time: "", category: 0 }
    },
    pickups: "",
    notifications: ""
  };

  handleSelect = (id, value) => {
    this.setState(prevState => ({
      categories: {
        ...prevState.categories,
        [id]: { ...prevState.categories[id], category: value }
      }
    }));
  };

  handleEnterTime = (id, value) => {
    this.setState(prevState => ({
      categories: {
        ...prevState.categories,
        [id]: { ...prevState.categories[id], time: value }
      }
    }));
  };

  handleChangePickups = value => {
    this.setState({ pickups: value });
  };

  handleChangeNotifications = value => {
    this.setState({ notifications: value });
  };

  handleSubmit = () => {
    const { categories, pickups, notifications } = this.state;
    const { onSubmit } = this.props;
    if (
      Object.values(categories).every(({ time }) => timeValidate(time)) &&
      numberValidate(pickups) &&
      numberValidate(notifications)
    ) {
      console.log("time to submit", categories, pickups, notifications);
      onSubmit({ categories, pickups, notifications });
    }
  };

  render() {
    const { categories, pickups, notifications } = this.state;

    return (
      <Container>
        {Object.values(categories).map((category, index) => (
          <Category
            key={`category-${index}`}
            id={index}
            value={categories}
            onEnterTime={this.handleEnterTime}
            onSelect={this.handleSelect}
          />
        ))}
        <Spacer />
        <NumberInput
          value={pickups}
          label={"pickups"}
          onChange={this.handleChangePickups}
          placeholder={0}
        />
        <Spacer />
        <NumberInput
          value={notifications}
          label={"notifications"}
          onChange={this.handleChangeNotifications}
          placeholder={0}
        />
        <SubmitButton onClick={this.handleSubmit} />
      </Container>
    );
  }
}

export default Form;
