import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(50, 50, 50, 0.5);
  padding: 10vw;
  color: white;
`;

const Modal = ({ onClick }) => (
  <Container onClick={onClick}>hello! this is a test of the modal</Container>
);

export default Modal;
