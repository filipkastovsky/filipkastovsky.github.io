/* eslint-disable react/jsx-no-comment-textnodes */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderDesktop extends Component {
  state = {
    showName: false
  };

  componentDidMount() {
    window.location.href.split('/').pop() === ''
      ? this.setState({ showName: false })
      : this.setState({ showName: true });
  }
  render() {
    return (
      <header>
        <h2 style={{ fontFamily: 'Arial' }}>&lt;/&gt;</h2>
        <h2
          className={`header-title ${this.state.showName ? 'shown' : 'hidden'}`}
        >
          <Link to="/">// FILIP_KAŠTOVSKÝ</Link>
        </h2>
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
      </header>
    );
  }
}

export default HeaderDesktop;
