import React from 'react';
import logo from 'assets/logo.png';
import Filter from 'components/Filter'
import 'components/style.scss'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="header__title">
          <img src={logo} alt="logo" />
          <p>Hacker News</p>
        </div>
        <div className="header__filter">
          <Filter />
        </div>
      </div>
    );
  }
}

export default Header;