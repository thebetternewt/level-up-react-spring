import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import Routes from './Routes';
import Nav from './Nav';
import Checkout from './Checkout';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import Accordion from './Accordion';
import Waypoints from './Waypoints';
import Gesture from './Gesture-01';
import Boxes from './Boxes';
import Carousel from './Carousel';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0,0,0) scale(1) rotate(0deg)`
      : `translate3d(400px,0,0) scale(0.5) rotate(20deg)`,
    // config: config.wobbly,
  });

  const toggleNav = () => setNavOpen(!isNavOpen);
  const toggleCheckout = () => setCheckoutOpen(!isCheckoutOpen);

  return (
    <animated.div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Logo" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button className="menu-button" onClick={toggleCheckout}>
            Checkout
          </button>
          <button className="menu-button" onClick={toggleNav}>
            Menu
          </button>
        </div>
      </header>
      <main>
        <Carousel />
        {/* <Routes /> */}
        {/* <Modal /> */}
        {/* <Accordion /> */}
        {/* <Waypoints /> */}
        {/* <Gesture /> */}
        {/* <Boxes /> */}
      </main>
      <Checkout isOpen={isCheckoutOpen} />
      <Nav style={navAnimation} close={toggleNav} />
    </animated.div>
  );
};

export default App;
