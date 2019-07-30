import React from 'react';
import MediaQuery from 'react-responsive';

import Intro from '../components/Intro';

import HeaderMobile from '../components/HeaderMobile';
import HeaderDesktop from '../components/HeaderDesktop';

import bgvideo from '../assets/bg.mp4';

const IntroPage = () => {
  return (
    <div>
      <MediaQuery maxDeviceWidth={600}>
        <div className="react-wrapper-mobile">
          <HeaderMobile />
          <Intro />
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={601}>
        <div className="react-wrapper-desktop">
          <HeaderDesktop />
          <video autoPlay muted loop className="bg-video">
            <source src={bgvideo} type="video/mp4" />
          </video>
          <Intro />
        </div>
      </MediaQuery>
    </div>
  );
};
export default IntroPage;
