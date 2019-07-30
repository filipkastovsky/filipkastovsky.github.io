import React from 'react';
import { Link } from 'react-router-dom';

const NavMobile = () => (
  <nav className="slide-up">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/about">about_</Link>
      </li>
      <li className="nav-item">
        <Link to="/skills">skills_</Link>
      </li>
      <li className="nav-item">
        <Link to="/projects">projects_</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact">contactMe_</Link>
      </li>
    </ul>
  </nav>
);

export default NavMobile;
