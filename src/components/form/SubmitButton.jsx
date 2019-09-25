import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 213px;
  margin-top: 50px;
`;

const Button = styled.a`
  background-color: black;
  color: white;
  font-size: 12pt;
  padding: 10px 40px 10px 40px;
  border: solid white 1px;
  cursor: pointer;
  &:hover {
    color: rgb(130, 130, 130);
    border-color: rgb(130, 130, 130);
  }

  &:active {
    color: rgb(100, 100, 100);
    border-color: rgb(100, 100, 100);
  }
`;

const Error = styled.p`
  font-size: 8pt;
  color: red;
`;

const SubmitButton = ({ onClick, error }) => (
  <Container>
    <Button onClick={onClick}>generate</Button>
    {error !== "" && <Error>{error}</Error>}
  </Container>
);

export default SubmitButton;
