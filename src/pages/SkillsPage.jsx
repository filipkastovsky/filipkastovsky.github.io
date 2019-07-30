import React from 'react';
import MediaQuery from 'react-responsive';

import Skills from '../components/Skills';

import HeaderMobile from '../components/HeaderMobile';
import HeaderDesktop from '../components/HeaderDesktop';

const SkillsPage = () => {
  return (
    <div>
      <MediaQuery maxDeviceWidth={600}>
        <div className="react-wrapper-mobile">
          <HeaderMobile />
          <Skills />
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={601}>
        <div className="react-wrapper-desktop">
          <HeaderDesktop />
          <Skills />
        </div>
      </MediaQuery>
    </div>
  );
};
export default SkillsPage;
