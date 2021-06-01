import React from 'react';
import './navBar.scss';
import { RiMiniProgramLine } from 'react-icons/ri';

const NavigationBar = () => {
  return (
    <div className='navBarWrapper'>
      <div className='appLogoContainer'>
        <div className='appLogo'>
          <RiMiniProgramLine size={35} />
        </div>
        <div className='appName'>New Sapce</div>
      </div>
      <div className='navItemContainer'>
        <div className='pageTitle'>Dashboard</div>
        <div className='navItems'></div>
      </div>
    </div>
  );
};

export default NavigationBar;
