import React from 'react';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring, config } from 'react-spring';

const Gesture = () => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: config.wobbly,
  }));
  const bind = useGesture(({ down, delta }) => {
    set({ xy: down ? delta : [0, 0] });
  });

  return (
    <animated.div
      {...bind()}
      className="box"
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
    />
  );
};

export default Gesture;
