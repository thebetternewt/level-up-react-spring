import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import cogs from './images/cogs.jpeg';
import workbench from './images/workbench.jpeg';
import wrenches from './images/wrenches.jpeg';

const slideImages = [cogs, workbench, wrenches];

const StyledSlide = styled(animated.div)`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  img {
    width: 100%;
    min-width: 100%;
    min-height: 100%;
    transform: translate3d(0, -50%, 0);
  }
`;

const CarouselControls = styled.div`
  width: 100vw;
  position: absolute;
  top: 45%;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  button {
    width: 25px;
    height: 25px;
    background-color: #eee;
    border: 1px solid blue;
    border-radius: 99px;
    cursor: pointer;

    margin: 0 15px;
  }
`;

const Carousel = ({ slideIndex, nextSlide, prevSlide }) => {
  const transitions = useTransition(slideIndex, item => item, {
    from: {
      opacity: 0,
      transform: `translate3d(100%,0,0)`,
    },
    enter: { opacity: 1, transform: `translate3d(0,0,0)` },
    leave: { opacity: 0, transform: `translate3d(-50%,0,0)` },
  });

  return (
    <div
      style={{
        position: 'relative',
        height: 400,
      }}
    >
      {transitions.map(({ item, key, props: animation }) => {
        const Slide = () => (
          <StyledSlide style={animation}>
            <img src={slideImages[item]} alt="slide #" />
          </StyledSlide>
        );
        return <Slide key={key} />;
      })}

      <CarouselControls>
        <button onClick={prevSlide}>P</button>
        <button onClick={nextSlide}>N</button>
      </CarouselControls>
    </div>
  );
};

const CarouselWrapper = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === slideImages.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(slideImages.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <>
      <Carousel
        slideIndex={slideIndex}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </>
  );
};

export default CarouselWrapper;
