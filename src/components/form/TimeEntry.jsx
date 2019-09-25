import React, { useState } from "react";

import { timeValidate } from "../../lib/utils";

import TextInput from "./TextInput";

const TimeEntry = ({ placeholder, value, onChange }) => {
  const [error, setError] = useState("");

  const handleOnChange = ({ target: { value } }) => {
    onChange(value);
    if (timeValidate(value)) {
      setError("");
      onChange(value);
    } else {
      setError("please follow formatting");
    }
  };

  return (
    <TextInput
      placeholder={placeholder}
      error={error}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default TimeEntry;
