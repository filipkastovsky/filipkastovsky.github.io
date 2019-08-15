import React from 'react';

import emailIcon from '../assets/contacts/email_icon.png';
import githubIcon from '../assets/contacts/github_icon.png';
import linkedInIcon from '../assets/contacts/linkedin_icon.png';
import resumeIcon from '../assets/contacts/resume.png';

const ContactMe = () => {
  return (
    <div className="contactMe slide-up slide-right">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">contactMe_</li>
        </ul>
      </nav>
      <div className="contacts-wrapper">
        <div className="contactMe-text">
          <p>
            <strong>connect with</strong> me via:
          </p>
        </div>

        <ul className="contactMe-list">
          <li className="contactMe-item">
            <a href="mailto:devfilipkastovsky@gmail.com">
              <img src={emailIcon} alt="Email" />
            </a>
          </li>

          <li className="contactMe-item">
            <a
              href="https://github.com/filipkastovsky/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="Github" />
            </a>
          </li>
          <li className="contactMe-item">
            <a
              href="https://www.linkedin.com/in/filip-kastovsky/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
      <div className="resume-wrapper">
        <div className="contactMe-text">
          <p>
            view <strong>resume</strong>:
          </p>
        </div>

        <div className="resume">
          <a
            href="https://drive.google.com/file/d/1_ndo2cdlwtBGE1qDzrVKJSihZvB31thr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={resumeIcon} alt="Resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
