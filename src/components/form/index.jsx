import React, { Component } from "react";
import styled from "styled-components";

import { timeValidate, numberValidate, timeStringToInt } from "../../lib/utils";

import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";
import Category from "./Category";

const Container = styled.div`
  position: absolute;
  padding: 20px;
  width: 50%;
`;

const TextContainer = styled.div`
  width: 50vw;
  max-width: 500px;
`;

const Spacer = styled.div`
  height: 20px;
`;

const Label = styled.div`
  margin-top: 20px;
  color: white;
`;

class Form extends Component {
  state = {
    categories: {
      0: { time: "", category: "" },
      1: { time: "", category: "" },
      2: { time: "", category: "" }
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
        notifications,
        categories: {}
      };

      Object.keys(categories).forEach(key => {
        data.categories[categories[key].category.value] = timeStringToInt(
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
        <TextInput
          value={pickups}
          label={"pickups/day"}
          validation={numberValidate}
          errorString={"please enter a number"}
          onChange={this.handleChangePickups}
          placeholder={"0"}
        />
        <Spacer />
        <TextInput
          value={notifications}
          label={"notifications/day"}
          validation={numberValidate}
          errorString={"please enter a number"}
          onChange={this.handleChangeNotifications}
          placeholder={"0"}
        />
        <SubmitButton onClick={this.handleSubmit} error={error} />
      </Container>
    );
  }
}

export default Form;
