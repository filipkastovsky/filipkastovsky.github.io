import React from 'react';
import portrait from '../assets/profile.png';

const Intro = () => {
  return (
    <div className="intro slide-down slide-right">
      <h1 className="title">// FILIP_KAŠTOVSKÝ</h1>

      <img className="portrait" src={portrait} alt="portrait" />
    </div>
  );
};

export default Intro;
