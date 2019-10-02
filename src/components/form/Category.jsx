import React from "react";
import chroma from "chroma-js";
import styled from "styled-components";
import Select from "react-select";

import { timeValidate } from "../../lib/utils";
import { colors, categoryToColor, options } from "../../lib/constants";

import TextInput from "./TextInput";

const box = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10
  }
});

const colorStyles = {
  container: styles => ({
    ...styles,
    width: "50%"
  }),
  control: styles => ({
    ...styles,
    boxShadow: "none",
    borderRadius: 0,
    backgroundColor: "rgba(0,0,0)",
    border: "1px solid white",
    "&:hover": {
      border: "1px solid rgb(130,130,130)"
    }
  }),
  menu: styles => ({
    ...styles,
    borderRadius: 0,
    color: "white",
    boxShadow: "none",
    backgroundColor: "rgba(0,0,0)",
    border: "solid white 1px"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(categoryToColor[data.value]);
    return {
      ...styles,
      backgroundColor: isFocused ? "rgba(130, 130, 130, 0.5)" : null,
      //   backgroundColor: isDisabled
      //     ? null
      //     : isSelected
      //     ? data.color
      //     : isFocused
      //     ? color.alpha(0.1).css()
      //     : null
      //   color: isDisabled
      //     ? "#ccc"
      //     : isSelected
      //     ? chroma.contrast(color, "white") > 2
      //       ? "white"
      //       : "black"
      //     : data.color,
      textAlign: "left",
      cursor: isDisabled ? "not-allowed" : "default"
      //   ":active": {
      //     ...styles[":active"],
      //     backgroundColor:
      //       !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
      //   }
    };
  },
  indicatorSeparator: () => ({ display: "none" }),
  input: styles => ({ ...styles, ...box() }),
  placeholder: styles => ({ ...styles, ...box() }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: "white",
    ...box(categoryToColor[data.value])
  })
};

const Container = styled.div`
  margin-top: 20px;
  width: 50vw;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Category = ({ id, value, onSelect, onEnterTime }) => {
  const { time, category } = value[id];

  return (
    <Container>
      <TextInput
        placeholder="0h0m"
        value={time}
        validation={timeValidate}
        errorString={"follow XhYm formatting"}
        onChange={time => onEnterTime(id, time)}
      />
      <Select
        placeholder={"screen time category"}
        selected={options[category]}
        onChange={selection => onSelect(id, selection)}
        options={options.filter(
          option =>
            !Object.values(value)
              .map(({ category: { value } }) => value)
              .includes(option.value)
        )}
        styles={colorStyles}
      />
    </Container>
  );
};

export default Category;
