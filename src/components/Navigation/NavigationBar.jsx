import React, { useState } from 'react';
import './navBar.scss';
import { RiMiniProgramLine } from 'react-icons/ri';
import { VscBellDot, VscMail, VscSearch } from 'react-icons/vsc';
import { BsGrid3X3Gap } from 'react-icons/bs';
import NavBarOptions from './NavBarOptions';
import useWindowSize from '../../hooks/useWindowSize';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();
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
        <div className='navItems'>
          {windowSize.width > 768 && (
            <div>
              <div className='nav-icons'>
                <VscBellDot size={20} />
              </div>
              <div className='nav-icons'>
                <VscMail size={20} />
              </div>
              <div className='nav-icons'>
                <VscSearch size={20} />
              </div>
            </div>
          )}
          <div className='nav-icons' onClick={() => setIsOpen(!isOpen)}>
            <BsGrid3X3Gap size={20} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='navOptionsContainer'>
          <NavBarOptions />
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
