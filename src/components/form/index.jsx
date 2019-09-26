import React, { Component } from "react";
import styled from "styled-components";

import { timeValidate, numberValidate, timeStringToInt } from "../../lib/utils";

import SubmitButton from "./SubmitButton";
import NumberInput from "./NumberInput";
import Category from "./Category";

const Container = styled.div`
  position: absolute;
  padding: 20px;
  width: 50%;
`;

const Spacer = styled.div`
  height: 20px;
`;

class Form extends Component {
  state = {
    categories: {
      0: { time: "", category: 0 },
      1: { time: "", category: 0 },
      2: { time: "", category: 0 }
    },
    pickups: "",
    notifications: "",
    error: ""
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
      Object.values(categories).every(
        ({ time, category }) => timeValidate(time) && category
      ) &&
      numberValidate(pickups) &&
      numberValidate(notifications)
    ) {
      this.setState({ error: "" });

      const data = {
        pickups,
        notifications
      };

      Object.keys(categories).forEach(key => {
        data[categories[key].category.value] = timeStringToInt(
          categories[key].time
        );
      });

      onSubmit(data);
    } else {
      this.setState({ error: "please correct form errors" });
    }
  };

  render() {
    const { categories, pickups, notifications, error } = this.state;

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
          label={"pickups/day"}
          onChange={this.handleChangePickups}
          placeholder={0}
        />
        <Spacer />
        <NumberInput
          value={notifications}
          label={"notifications/day"}
          onChange={this.handleChangeNotifications}
          placeholder={0}
        />
        <SubmitButton onClick={this.handleSubmit} error={error} />
      </Container>
    );
  }
}

export default Form;
