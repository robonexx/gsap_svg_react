import React, { useRef, useEffect, forwardRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import BoxesPage from './BoxesPage';
import Gsap_Svg from './Gsap_Svg';
import TextPage from './TextPage';
import './App.css';

export default function App() {
  const btnRef = useRef();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: '#e77614',
      scale: 1.1,
      ease: 'Power2.easeOut',
      duration: 0.4,
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: 'transparent',
      scale: 1,
      ease: 'Power2.easeIn',
      duration: 0.4,
    });
  };

  /* const onEnter = (e) => {
    gsap.from(e, { yPercent: 100, backgroundColor: 'transparent' });
    gsap.to(e, {yPercent: 0, scale: 1.1,delay: 0.1, ease: "power2.out", backgroundColor: '#e77614'})
  };

  const onLeave = (e) => {
    gsap.from('.bg', {yPercent: 0, scale: 1.1, backgroundColor: '#e77614'});
    gsap.to('.bg', {
      yPercent: 100, backgroundColor: 'transparent', ease: "power2.out"
    });
    clearImmediate()
  }; */
  return (
    <Router>
      <div>
        <nav>
          <li className='btn'>
            <Link
              to='/'
              ref={btnRef}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              Home
            </Link>
          </li>
          <li className='btn'>
            <Link
              to='/svg'
              ref={btnRef}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              Svg
            </Link>
          </li>
          <li className='btn'>
            <Link
              to='/boxes'
              ref={btnRef}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              Boxes
            </Link>
          </li>

          {/*    
          <Link to="/text" className="btn" ref={btnRef}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}>Text</Link> */}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/boxes'>
            <BoxesPage />
          </Route>
          <Route path='/text'>
            <TextPage />
          </Route>
          <Route path='/svg'>
            <Gsap_Svg />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='home'>
      <h1>HOME</h1>
      <p>Learning Gsap and Svg manipulation</p>
    </div>
  );
}
