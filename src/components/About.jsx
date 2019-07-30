import React from 'react';

const About = () => {
  return (
    <div className="about slide-down slide-left">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">about_</li>
        </ul>

        <ul className="about-list">
          <li className="about-item">
            I am an enthusiastic <strong>web developer</strong>
          </li>
          <li className="about-item">
            I am residing in <strong>Ostrava, CZ</strong>
          </li>
          <li className="about-item">
            I am passionate about both the <strong>frontend</strong> and the{' '}
            <strong>backend</strong>
          </li>
          <li className="about-item">
            I am always looking forward to <strong>new challenges</strong>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
