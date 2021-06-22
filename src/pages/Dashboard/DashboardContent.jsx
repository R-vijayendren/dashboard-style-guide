import React from 'react';
import Card from '../../components/Card/Card';
import { DASHBOARD_LEADERBOARD_DATA } from './constants';
import './Dashboard.scss';

import { FiPaperclip, FiClipboard } from 'react-icons/fi';
import { BiLockAlt, BiBlock } from 'react-icons/bi';
import { RiBarChart2Fill } from 'react-icons/ri';

import SalesGraph from './SalesGraph';
import DashBoardActivity from '../ActivityContainer/DashBoardActivity';
import TableContainer from '../TableContainer/TableContainer';
import DashboardWelcomeContainer from './DashboardWelcomeContainer';

const DashboardContent = () => {
  const renderIcon = value => {
    switch (value) {
      case 'leads': {
        return <FiPaperclip size={40} />;
      }
      case 'pending': {
        return <BiBlock size={40} />;
      }
      case 'closed': {
        return <BiLockAlt size={40} />;
      }
      case 'confirmed': {
        return <FiClipboard size={40} />;
      }
      default: {
        return null;
      }
    }
  };

  const renderLeaderBoard = leaderBoard => {
    return (
      <Card key={leaderBoard.key}>
        <div className='card-name'>
          <div className='card-label'>
            <div
              style={{ color: leaderBoard.statColor }}
              className='card-count'
            >
              {leaderBoard.count}
            </div>
            <div className='card-label__name'>{leaderBoard.label}</div>
          </div>
          <div className='card-icon'>{renderIcon(leaderBoard.key)}</div>
        </div>
        <div
          style={{ backgroundColor: leaderBoard.statColor }}
          className='card-footer'
        >
          <div>% Change</div>
          <div>
            <RiBarChart2Fill size={20} />
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className='dashboard-content-wrapper'>
      <DashboardWelcomeContainer />
      <div className='leaderboard-container'>
        {DASHBOARD_LEADERBOARD_DATA.map(leaderboardItem =>
          renderLeaderBoard(leaderboardItem)
        )}
      </div>
      <div className='sales-container'>
        <SalesGraph />
      </div>
      <TableContainer />
      <DashBoardActivity />
    </div>
  );
};

export default DashboardContent;
