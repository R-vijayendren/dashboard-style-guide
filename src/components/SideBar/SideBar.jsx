import React from 'react';
import './SideBar.scss';

import { SIDE_BAR_OPTIONS, SIDE_BAR_GLOBAL_OPTIONS } from './constants';
import { renderOptions } from './helpers';

const SideBar = () => {
  return (
    <div className='sideBarWrapper'>
      <div className='userInfoContainer'>
        <div className='userProfileImage' />
        <div className='userInfoDetails'>
          <div className='user-name'>Vijayendren</div>
          <div className='user-desgination'>Software Developer</div>
        </div>
      </div>
      <div className='userUiKits'>
        <div className='kit-label'>UI Kits</div>
        <div className='sideBar-user-options'>
          {SIDE_BAR_OPTIONS.map(option => renderOptions(option))}
        </div>
        <div className='sideBar-global-options'>
          {SIDE_BAR_GLOBAL_OPTIONS.map(option => renderOptions(option))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
