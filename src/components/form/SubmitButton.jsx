import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
`;

const Button = styled.a`
  background-color: black;
  margin-left: 50px;
  color: white;
  font-size: 12pt;
  padding: 10px 40px 10px 40px;
  border: solid white 1px;
  &:hover {
    color: rgb(130, 130, 130);
    border-color: rgb(130, 130, 130);
  }

  &:active {
    color: rgb(100, 100, 100);
    border-color: rgb(100, 100, 100);
  }
`;

const Label = styled.label``;

const Error = styled.p`
  position: absolute;
  margin-top: 2px;
  font-size: 8pt;
  color: red;
`;

const SubmitButton = ({ onClick, error }) => (
  <Container>
    <Button onClick={onClick}>
      <Label>generate</Label>
    </Button>
    {error !== "" && <Error>{error}</Error>}
  </Container>
);

export default SubmitButton;
