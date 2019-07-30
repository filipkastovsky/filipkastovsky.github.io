import React from 'react';
import MediaQuery from 'react-responsive';

import ContactMe from '../components/ContactMe';

import HeaderMobile from '../components/HeaderMobile';
import HeaderDesktop from '../components/HeaderDesktop';

const ContactMePage = () => {
  return (
    <div>
      <MediaQuery maxDeviceWidth={600}>
        <div className="react-wrapper-mobile">
          <HeaderMobile />
          <ContactMe />
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={601}>
        <div className="react-wrapper-desktop">
          <HeaderDesktop />
          <ContactMe />
        </div>
      </MediaQuery>
    </div>
  );
};
export default ContactMePage;
