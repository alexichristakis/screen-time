import React, { useState } from "react";

import { numberValidate } from "../../lib/utils";

import TextInput from "./TextInput";

const NumberInput = ({ placeholder, label, value, onChange }) => {
  const [error, setError] = useState("");

  const handleOnChange = ({ target: { value } }) => {
    onChange(value);
    if (numberValidate(value)) {
      onChange(value);
      setError("");
    } else {
      setError("please enter a number");
    }
  };

  return (
    <TextInput
      placeholder={placeholder}
      error={error}
      label={label}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default NumberInput;
