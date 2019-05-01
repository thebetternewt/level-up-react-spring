import React from 'react';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring, config } from 'react-spring';

const Gesture = () => {
  const [{ x }, set] = useSpring(() => ({
    x: 0,
    config: { ...config.stiff, tension: 300 },
  }));
  const bind = useGesture(({ down, delta }) => {
    if (down) {
      set({ x: delta[0] });
    } else {
      if (delta[0] > 300) {
        set({ x: 400 });
      } else if (delta[0] < -300) {
        set({ x: -400 });
      } else {
        set({ x: 0 });
      }
    }
  });

  return (
    <animated.div
      {...bind()}
      className="box"
      style={{
        backgroundColor: x.interpolate({
          map: Math.abs,
          range: [0, 300],
          output: ['red', 'blue'],
        }),
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
      }}
    />
  );
};

export default Gesture;
