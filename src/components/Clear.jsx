import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  pointer-events: box-none;
`;

export const Icon = styled.a`
  cursor: pointer;
  position: absolute;
  left: 40px;
  bottom: 35px;
  font-size: 10pt;
  padding: 5px 10px 7px 10px;
  color: white;
  text-align: center;
  border: solid white 1px;
  transition: all 250ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  &:hover {
    transform: scale(1.2);
  }
`;

const Clear = ({ data, onClick }) => {
  if (Object.entries(data).length)
    return (
      <Container>
        <Icon onClick={onClick}>clear</Icon>
      </Container>
    );
  else return null;
};

export default Clear;
