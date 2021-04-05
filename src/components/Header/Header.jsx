import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import reactSvg from '../../images/react.svg';

const Header = () => {
    return (
        <header>
        <div className="container react" id="header">
          <div>
            <img className="logo" src={logo} alt="Logo" />
          </div>
          <div className="textRight">
            <img src={reactSvg} alt="React" className="reactLogo" /><strong
              >React</strong>
          </div>
        </div>
      </header>
    );
};

export default Header;