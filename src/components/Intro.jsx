/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import portrait from '../assets/profile.png';

const Intro = () => {
  return (
    <div className="intro slide-down slide-right">
      <div className="title-container">
        <h1 className="title">// FILIP_KAŠTOVSKÝ</h1>
        <h2 className="description">web developer</h2>
      </div>
      <img className="portrait" src={portrait} alt="portrait" />
    </div>
  );
};

export default Intro;
