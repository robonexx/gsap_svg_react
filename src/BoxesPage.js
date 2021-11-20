import React, { useRef, useEffect, forwardRef, useState } from 'react';
import { gsap } from 'gsap';
import './boxes.css';

function Box({ children }) {
  return <div className='box'>{children}</div>;
}

function Container({ children }) {
  return (
    <div>
      <Box>Nested Box</Box>
    </div>
  );
}

const Box2 = forwardRef(({ children }, ref) => {
  return (
    <div className='box2' ref={ref}>
      {children}
    </div>
  );
});

function Container2({ children }) {
  return (
    <div>
      <Box>Don't Animate Me</Box>
    </div>
  );
}

const BoxesPage = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const boxRef = useRef();

  const box1 = useRef();
  const box2 = useRef();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: '#e77614', scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: '#28a92b', scale: 1 });
  };

  useEffect(() => {
    const boxes = [box1.current, box2.current];

    gsap.to(boxRef.current, { rotation: '+=360', repeat: false });
    gsap.to(q('.box'), {
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
    gsap.to(boxes, {
      x: 100,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  }, []);

  return (
    <div className='boxesPage' ref={el}>
      <div
        className='box hello'
        ref={boxRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        Hello
      </div>
      <div className='upper'>
        <Box>Box</Box>
        <Container />
        <Box>Box</Box>
      </div>
      <br />
      <br />
      <div className='lower'>
        <Box2 ref={box1}>Box</Box2>
        <Container2></Container2>
        <Box2 ref={box2}>Box</Box2>
      </div>
    </div>
  );
};

export default BoxesPage;
