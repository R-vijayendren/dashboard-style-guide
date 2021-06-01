import './SideBar.scss';

import {
  FaUserAlt,
  FaCoins,
  FaRegCalendarAlt,
  FaRegLifeRing
} from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
import { GiThreeFriends } from 'react-icons/gi';

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

export const renderOptions = option => {
  return (
    <div key={option.key} className='option-item pd-05'>
      <div className='option-name'>
        {renderIcon(option.key)} {option.label}
      </div>
      {option.count && <div className='option-badge'>{option.count}</div>}
    </div>
  );
};
