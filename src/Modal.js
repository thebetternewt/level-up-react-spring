import React, { useState } from 'react';
import { animated, useTransition, interpolate } from 'react-spring';

const Modal = ({ close, animation, pointerEvents }) => {
  const { opacity, x, y, rotate } = animation;
  return (
    <div className="modal" style={{ pointerEvents }}>
      <animated.div
        style={{
          opacity,
          backgroundColor: 'rgba(0,0,0,0.6)',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0,
        }}
      />
      <animated.div
        className="modal-card"
        style={{
          opacity,
          transform: interpolate(
            [x, y, rotate],
            (x, y, rotate) =>
              `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`
          ),
        }}
      >
        <h1>Modal</h1>
        <button onClick={close} className="close-button">
          Close
        </button>
      </animated.div>
    </div>
  );
};

const ModalWrapper = () => {
  const [on, toggle] = useState(false);
  const transition = useTransition(on, null, {
    from: { opacity: 0, x: 0, y: -40, rotate: 0 },
    enter: { opacity: 1, x: 0, y: 0, rotate: 0 },
    leave: { opacity: 0, x: -400, y: 0, rotate: 90 },
  });

  const pointerEvents = on ? 'all' : 'none';

  return (
    <div>
      <button onClick={() => toggle(true)}>Open</button>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              key={key}
              close={() => toggle(false)}
              animation={animation}
              pointerEvents={pointerEvents}
            />
          )
      )}
    </div>
  );
};

export default ModalWrapper;
