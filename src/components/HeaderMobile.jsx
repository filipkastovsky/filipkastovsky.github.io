/* eslint-disable react/jsx-no-comment-textnodes */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavMobile from './NavMobile';

class HeaderMobile extends Component {
  state = { showName: false, nav: false };

  toggleNav = () => {
    this.setState({ showName: true, nav: !this.state.nav });
  };

  componentDidMount() {
    window.location.href.split('/').pop() === ''
      ? this.setState({ showName: false })
      : this.setState({ showName: true });
  }

  render() {
    return (
      <div>
        <header>
          <h2
            className={`header-title ${
              this.state.showName ? 'shown' : 'hidden'
            }`}
          >
            <Link to="/">// FILIP_KAŠTOVSKÝ</Link>
          </h2>
          <div className="burger" onClick={this.toggleNav}>
            <div className="burger-line" />
            <div className="burger-line" />
            <div className="burger-line" />
          </div>
        </header>
        {this.state.nav ? <NavMobile showNav={this.toggleNav} /> : null}
      </div>
    );
  }
}

export default HeaderMobile;
