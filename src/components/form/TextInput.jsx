import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 50vw;
  max-width: 500px;
  flex-direction: row;
`;

const InputContainer = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  width: calc(50% - 30px);
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  min-height: 38px;
  box-sizing: border-box;
  background-color: transparent;
  color: white;
  border-width: 0px;
  border-bottom: solid white 1px;
  outline: none;
  padding-left: 5px;
  font-size: 12pt;
  &:hover {
    border-color: rgb(130, 130, 130);
  }
`;

const Label = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  color: white;
`;

const Error = styled.p`
  position: absolute;
  margin-top: 45px;
  margin-left: 10px;
  font-size: 8pt;
  color: red;
`;

const TextInput = ({
  placeholder,
  label,
  errorString,
  value,
  onChange,
  validation
}) => {
  const [error, setError] = useState("");

  const handleOnChange = ({ target: { value } }) => {
    onChange(value);
    if (validation(value)) {
      onChange(value);
      setError("");
    } else {
      setError(errorString);
    }
  };

  const Field = (
    <InputContainer>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      {error !== "" && <Error>{error}</Error>}
    </InputContainer>
  );

  if (label)
    return (
      <Container>
        {Field}
        {label && <Label>{label}</Label>}
      </Container>
    );
  else return Field;
};

export default TextInput;
