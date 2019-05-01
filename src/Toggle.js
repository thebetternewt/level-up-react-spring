import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);
  const fade = useSpring({
    opacity: isToggled ? 1 : 0,
  });

  return (
    <div>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={() => setToggled(!isToggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;
