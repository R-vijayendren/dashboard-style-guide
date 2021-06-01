import React from 'react';
import './navBar.scss';

import {
  FaUserAlt,
  FaCoins,
  FaRegCalendarAlt,
  FaRegLifeRing
} from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
import { GiThreeFriends } from 'react-icons/gi';

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
  const renderIcon = value => {
    switch (value) {
      case 'profile': {
        return <FaUserAlt size={15} />;
      }
      case 'balance': {
        return <FaCoins size={15} />;
      }
      case 'connections': {
        return <GoGlobe size={15} />;
      }
      case 'friends': {
        return <GiThreeFriends size={15} />;
      }
      case 'events': {
        return <FaRegCalendarAlt size={15} />;
      }
      case 'account': {
        return <FaRegLifeRing size={15} />;
      }
      default:
        return null;
    }
  };
  return (
    <div className='navOptionsWrapper'>
      <div className='users-options'>
        {USERS_OPTIONS.map(options => {
          return (
            <div key={options.key} className='option-item pd-05'>
              {renderIcon(options.key)} <div>{options.label}</div>
            </div>
          );
        })}
      </div>
      <div className='global-options'>
        {GLOBAL_OPTIONS.map(options => {
          return (
            <div key={options.key} className='option-item pd-05'>
              {renderIcon(options.key)} <div>{options.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarOptions;
