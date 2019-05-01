import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import cogs from './images/cogs.jpeg';
import workbench from './images/workbench.jpeg';
import wrenches from './images/wrenches.jpeg';

const slideImages = [cogs, workbench, wrenches];

const StyledSlide = styled(animated.div)`
  height: 400px;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  img {
    min-width: 100%;
    min-height: 100%;
  }
`;

const slides = slideImages.map(img => (
  <animated.div key={img}>
    <img src={img} alt="slide #" />
  </animated.div>
));

const Carousel = ({ slideIndex }) => {
  const transitions = useTransition(slideIndex, item => item, {
    from: {
      opacity: 0,
      transform: `translate3d(100%,0,0)`,
    },
    enter: { opacity: 1, transform: `translate3d(0,0,0)` },
    leave: { opacity: 0, transform: `translate3d(-50%,0,0)` },
  });

  console.log(slideIndex);

  return (
    <div>
      {transitions.map(({ item, key, props: styles }) => {
        console.log(item);
        const Slide = slides[item];
        console.log(Slide);
        return <>{Slide}</>;
      })}
    </div>
  );
};

const CarouselWrapper = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <>
      <button onClick={nextSlide}>Next</button>
      <div style={{ position: 'relative' }}>
        <Carousel slideIndex={slideIndex} />
      </div>
    </>
  );
};

export default CarouselWrapper;
