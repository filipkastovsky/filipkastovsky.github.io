import React from 'react';
import MediaQuery from 'react-responsive';

import Intro from '../components/Intro';

import HeaderMobile from '../components/HeaderMobile';
import HeaderDesktop from '../components/HeaderDesktop';

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
          <Intro />
        </div>
      </MediaQuery>
    </div>
  );
};
export default IntroPage;
