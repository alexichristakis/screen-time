import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  width: 50vw;
  max-width: 500px;
`;

const Button = styled.a`
  background-color: black;
  color: white;
  font-size: 12pt;
  margin-left: 50%;
  padding: 10px 40px 10px 40px;
  border: solid white 1px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
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
  margin-left: 50%;
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
