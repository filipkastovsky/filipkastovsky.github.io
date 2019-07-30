import React from 'react';
import MediaQuery from 'react-responsive';

import About from '../components/About';

import HeaderMobile from '../components/HeaderMobile';
import HeaderDesktop from '../components/HeaderDesktop';

const AboutPage = () => {
  return (
    <div>
      <MediaQuery maxDeviceWidth={600}>
        <div className="react-wrapper-mobile">
          <HeaderMobile />
          <About />
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={601}>
        <div className="react-wrapper-desktop">
          <HeaderDesktop />
          <About />
        </div>
      </MediaQuery>
    </div>
  );
};
export default AboutPage;
