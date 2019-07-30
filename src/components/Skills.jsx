import React from 'react';
// Logos
import css3Logo from '../assets/logos/css-3-logo-AF06D75231-seeklogo.com.png';
import figmaLogo from '../assets/logos/figma-logo-E4E21D3AEA-seeklogo.com.png';
import gitLogo from '../assets/logos/git-logo-CD8D6F1C09-seeklogo.com.png';
import html5Logo from '../assets/logos/html5-logo-EF92D240D7-seeklogo.com.png';
import jsLogo from '../assets/logos/javascript-js-logo-2949701702-seeklogo.com.png';
import mongoDBLogo from '../assets/logos/mongodb-logo-427DDF8FDE-seeklogo.com.png';
import nodejsLogo from '../assets/logos/nodejs-logo-FBE122E377-seeklogo.com.png';
import npmLogo from '../assets/logos/npm-node-package-manager-logo-DE93649ED1-seeklogo.com.png';
import reactLogo from '../assets/logos/react-logo-7B3CE81517-seeklogo.com.png';
import sassLogo from '../assets/logos/sass-logo-E41E7734A8-seeklogo.com.png';
import tsLogo from '../assets/logos/typescript-logo-B29A3F462D-seeklogo.com.png';

const Skills = () => {
  return (
    <div className="skills slide-down slide-left">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">skills_</li>
        </ul>
      </nav>
      <ul className="skills-list">
        <li className="skills-item">
          Some of the <strong>technologies</strong> I use:
        </li>
      </ul>

      <div className="logos">
        <a
          href="https://www.w3.org/Style/CSS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={css3Logo} alt="CSS3 logo" />
        </a>
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={figmaLogo} alt="Figma logo" />
        </a>
        <a
          href="https://git-scm.com/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitLogo} alt="Git logo" />
        </a>
        <a
          href="https://www.w3.org/html/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={html5Logo} alt="HTML5 logo" />
        </a>

        <a
          href="https://www.ecma-international.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={jsLogo} alt="JS logo" />
        </a>
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mongoDBLogo} alt="MongoDB logo" />
        </a>
        <a
          href="https://nodejs.org/en/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={nodejsLogo} alt="NodeJS logo" />
        </a>
        <a
          href="https://www.npmjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={npmLogo} alt="npm logo" />
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={reactLogo} alt="React logo" />
        </a>
        <a
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={sassLogo} alt="SASS logo" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tsLogo} alt="TS logo" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
