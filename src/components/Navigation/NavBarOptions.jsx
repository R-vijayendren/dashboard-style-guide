import React from 'react';
import './navBar.scss';

const USERS_OPTIONS = [
  { key: 'profile', label: 'My Profile' },
  { key: 'balance', label: 'Balance' },
  { key: 'connections', label: 'Connections' },
  { key: 'friends', label: 'Friends' }
];

const GLOBAL_OPTIONS = [
  { key: 'events', label: 'Events' },
  { key: 'account', label: 'Account Settings' }
];

const NavBarOptions = () => {
  return (
    <div className='navOptionsWrapper'>
      <div className='users-options'>
        {USERS_OPTIONS.map(options => {
          return (
            <div key={options.key} className='option-item pd-05'>
              {options.label}
            </div>
          );
        })}
      </div>
      <div className='global-options'>
        {GLOBAL_OPTIONS.map(options => {
          return (
            <div key={options.key} className='option-item pd-05'>
              {options.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarOptions;
