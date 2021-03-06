import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavMobile extends Component {
  hideNav = () => {
    this.props.showNav();
  };

  render() {
    return (
      <nav className="slide-up">
        <ul className="nav-list">
          <li className="nav-item">
            <Link onClick={this.hideNav} to="/about">
              about_
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={this.hideNav} to="/skills">
              skills_
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={this.hideNav} to="/projects">
              projects_
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={this.hideNav} to="/contact-me">
              contactMe_
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMobile;
