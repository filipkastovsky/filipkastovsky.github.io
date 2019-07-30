/* eslint-disable react/jsx-no-comment-textnodes */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavMobile from './NavMobile';

class HeaderMobile extends Component {
  state = { nav: false };

  toggleNav = () => {
    this.setState({ nav: !this.state.nav });
  };

  render() {
    return (
      <div>
        <header>
          <h2 className="header-title shown">
            <Link to="/">// FILIP_KAŠTOVSKÝ</Link>
          </h2>
          <div className="burger" onClick={this.toggleNav}>
            <div className="burger-line" />
            <div className="burger-line" />
            <div className="burger-line" />
          </div>
        </header>
        {this.state.nav ? <NavMobile /> : null}
      </div>
    );
  }
}

export default HeaderMobile;
