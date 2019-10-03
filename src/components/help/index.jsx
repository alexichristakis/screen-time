import React, { Component } from "react";
import styled from "styled-components";

import Modal from "./Modal";

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: box-none;
`;

export const Icon = styled.a`
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 30px;
  font-size: 10pt;
  padding-top: 2px;
  color: white;
  width: 22px;
  height: 20px;
  border: solid white 1px;
  text-align: center;
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  &:hover {
    transform: scale(1.5);
  }
`;

class Help extends Component {
  state = {
    modal: false
  };

  render() {
    const { modal } = this.state;
    return (
      <Container>
        {modal && <Modal onClick={() => this.setState({ modal: false })} />}
        <Icon onClick={() => this.setState({ modal: !modal })}>
          {modal ? "x" : "?"}
        </Icon>
      </Container>
    );
  }
}

export default Help;
