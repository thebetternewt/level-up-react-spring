import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

const Container = styled(animated.div)`
  height: calc(100vh - 20px);
  width: 250px;
  margin: 10px;
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 3px 7px 12px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;

  h3 {
    margin-top: 80px;
  }

  button {
    background-color: #373142;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    padding: 5px 8px;

    position: absolute;
    top: 15px;
    left: 15px;
  }
`;

const Nav = ({ children, close, style }) => (
  <Container style={style}>
    <button onClick={close}>Close</button>
    <h3>Nav</h3>
    {children}
  </Container>
);

export default Nav;
