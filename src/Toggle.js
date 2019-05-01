import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';

const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: 'C',
      key: 1,
    },
    {
      letter: 'h',
      key: 2,
    },
    {
      letter: 'r',
      key: 3,
    },
    {
      letter: 'i',
      key: 4,
    },
    {
      letter: 's',
      key: 5,
    },
  ]);
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div style={{ position: 'relative' }}>
      <button
        style={{ margin: 50 }}
        onClick={() => setItems([{ letter: 'C', key: 1 }])}
      >
        Toggle
      </button>
      {transition.map(({ item, key, props: style }) => (
        <animated.h1 style={style} key={key}>
          {item.letter}
        </animated.h1>
      ))}
    </div>
  );
};

export default Toggle;

/* 
  const [isToggled, setToggled] = useState(false);
  const transition = useTransition(isToggled, null, {
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
*/

// const toggle = () => setToggled(!isToggled);

/* <div style={{ position: 'relative' }}>
    <button style={{ margin: 50 }} onClick={toggle}>
      Toggle
    </button>
    {transition.map(({ item, key, props }) =>
      item ? (
        <animated.h1 style={props}>Hello</animated.h1>
      ) : (
        <animated.h1 style={props}>World</animated.h1>
      )
    )}
  </div>
*/
