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
  { key: 'profile', label: 'My Profile', count: null },
  { key: 'balance', label: 'Balance', count: null },
  { key: 'connections', label: 'Connections', count: 29 },
  { key: 'friends', label: 'Friends', count: null }
];

const GLOBAL_OPTIONS = [
  { key: 'events', label: 'Events', count: 4 },
  { key: 'account', label: 'Account Settings', count: null }
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

  const renderOptions = option => {
    return (
      <div key={option.key} className='option-item pd-05'>
        <div className='option-name'>
          {renderIcon(option.key)} {option.label}
        </div>
        {option.count && <div className='option-badge'>{option.count}</div>}
      </div>
    );
  };

  return (
    <div className='navOptionsWrapper'>
      <div className='users-options'>
        {USERS_OPTIONS.map(options => {
          return renderOptions(options);
        })}
      </div>
      <div className='global-options'>
        {GLOBAL_OPTIONS.map(options => {
          return renderOptions(options);
        })}
      </div>
    </div>
  );
};

export default NavBarOptions;
