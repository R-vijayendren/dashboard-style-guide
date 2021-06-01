import './SideBar.scss';

import { BsFillHouseDoorFill, BsTextLeft } from 'react-icons/bs';
import { AiFillThunderbolt } from 'react-icons/ai';
import {
  IoLogoWebComponent,
  IoSettingsSharp,
  IoDocumentsSharp
} from 'react-icons/io5';
import { VscMail } from 'react-icons/vsc';
import { ImCopy } from 'react-icons/im';
import { FaWpforms, FaMap, FaHtml5 } from 'react-icons/fa';

const renderIcon = value => {
  switch (value) {
    case 'dashboard': {
      return <BsFillHouseDoorFill size={13} />;
    }
    case 'apps': {
      return <AiFillThunderbolt size={13} />;
    }
    case 'components': {
      return <IoLogoWebComponent size={13} />;
    }
    case 'email': {
      return <VscMail size={13} />;
    }
    case 'form': {
      return <FaWpforms size={13} />;
    }
    case 'maps': {
      return <FaMap size={13} />;
    }
    case 'pages': {
      return <ImCopy size={13} />;
    }
    case 'menu': {
      return <BsTextLeft size={13} />;
    }
    case 'settings': {
      return <IoSettingsSharp size={13} />;
    }
    case 'document': {
      return <IoDocumentsSharp size={13} />;
    }
    case 'version': {
      return <FaHtml5 size={13} />;
    }
    default:
      return null;
  }
};

export const renderOptions = option => {
  return (
    <div key={option.key} className='option-item pd-08'>
      <div className='option-name'>
        {renderIcon(option.key)} {option.label}
      </div>
      {option.count && (
        <div
          style={{ backgroundColor: option.badgeColor }}
          className='option-badge'
        >
          {option.count}
        </div>
      )}
    </div>
  );
};
