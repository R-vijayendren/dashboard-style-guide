import React from 'react';
import './SideBar.scss';

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
      <div className='userUiKits'></div>
    </div>
  );
};

export default SideBar;
