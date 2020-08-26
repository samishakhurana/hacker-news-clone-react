import React from 'react';
import logo from 'assets/logo.png';
import darkModeLogo from 'assets/dark-mode-logo.svg'
import Filter from 'components/Filter'
import ToggleBtn from 'components/ToggleBtn'
import 'components/style.scss'

class Header extends React.Component {
  // constructor(context, props) {
  //   super(context, props)
  // }

  render () {
    return (
      <div className="header">
        <div className={`header__title ${this.props.mode}-mode-title`}>
          <img src={this.props.mode === 'light' ? logo : darkModeLogo} alt="logo" />
          <p>Hacker News</p>
          <ToggleBtn />
        </div>
        <div className={`header__filter ${this.props.mode}-mode-filter`}>
          <Filter />
        </div>
      </div>
    );
  }
}

export default Header;