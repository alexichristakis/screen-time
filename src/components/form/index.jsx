import React, { Component } from "react";
import styled from "styled-components";

import { timeValidate, numberValidate, timeStringToInt } from "../../lib/utils";
import { categoryToColor } from "../../lib/constants";

import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";
import Category from "./Category";

const Label = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  align-self: center;
  margin-right: 10px;
  background-color: ${props => categoryToColor[props.type]};
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

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
      !Object.values(categories).every(
        ({ time, category }) => timeValidate(time) && category
      )
    ) {
      this.setState({ error: "missing category or proper time formatting" });
    } else if (!numberValidate(pickups)) {
      this.setState({ error: "please fix pickups formatting" });
    } else if (!numberValidate(notifications)) {
      this.setState({ error: "please fix notifications formatting" });
    } else {
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

      console.log(data);

      onSubmit(data);
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
          placeholder="0"
          label={
            <Label>
              <Box type={"pickups"} />
              pickups/day
            </Label>
          }
          errorString="please enter a positive integer"
          validation={numberValidate}
          onChange={this.handleChangePickups}
        />
        <Spacer />
        <TextInput
          value={notifications}
          placeholder="0"
          label={
            <Label>
              <Box type={"notifications"} />
              notifications/day
            </Label>
          }
          errorString="please enter a positive integer"
          validation={numberValidate}
          onChange={this.handleChangeNotifications}
        />
        <SubmitButton onClick={this.handleSubmit} error={error} />
      </Container>
    );
  }
}

export default Form;
