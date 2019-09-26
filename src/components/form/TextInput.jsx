import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ErrorContainer = styled.div`
  flex-direction: column;
  height: 100%;
`;

const Input = styled.input`
  height: 100%;
  min-height: 38px;
  box-sizing: border-box;
  background-color: black;
  color: white;
  border-width: 0px;
  border-bottom: solid white 1px;
  outline: none;
  margin-right: 20px;
  padding-left: 5px;
  font-size: 12pt;
  &:hover {
    border-color: rgb(130, 130, 130);
  }
`;

const Label = styled.div`
  margin-top: 20px;
  color: white;
`;

const Error = styled.p`
  position: absolute;
  margin-top: 2px;
  margin-left: 10px;
  font-size: 8pt;
  color: red;
`;

const TextInput = ({ placeholder, label, error, value, onChange }) => (
  <Container>
    <ErrorContainer>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
      {error !== "" && <Error>{error}</Error>}
    </ErrorContainer>
    {label && <Label>{label}</Label>}
  </Container>
);

export default TextInput;
