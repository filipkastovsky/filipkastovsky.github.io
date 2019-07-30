import React from 'react';
import MediaQuery from 'react-responsive';

import Projects from '../components/Projects';

import HeaderMobile from '../components/HeaderMobile';
import HeaderDesktop from '../components/HeaderDesktop';

const ProjectsPage = () => {
  return (
    <div>
      <MediaQuery maxDeviceWidth={600}>
        <div className="react-wrapper-mobile">
          <HeaderMobile />
          <Projects />
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={601}>
        <div className="react-wrapper-desktop">
          <HeaderDesktop />
          <Projects />
        </div>
      </MediaQuery>
    </div>
  );
};
export default ProjectsPage;
