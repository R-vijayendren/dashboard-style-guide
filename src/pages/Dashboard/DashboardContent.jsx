import React from 'react';
import Card from '../../components/Card/Card';
import { DASHBOARD_LEADERBOARD_DATA } from './constants';
import './Dashboard.scss';

import { FiPaperclip, FiClipboard } from 'react-icons/fi';
import { BiLockAlt, BiBlock } from 'react-icons/bi';
import { RiBarChart2Fill } from 'react-icons/ri';

import Table from '../../components/Table/Table';
import DashboardToDoList from './DashboardToDoList';
import SalesGraph from './SalesGraph';
import DashBoardActivity from '../ActivityContainer/DashBoardActivity';

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
      <div className='dashboard-welcome-container'>
        <Card>
          <div className='card-item-container'>
            <div className='card-left-content'>
              <div className='card-label'>
                Welcome to <em>New Space</em>
              </div>
              <div className='card-description'>Number of Views</div>
            </div>
            <div className='card-right-content'>102</div>
          </div>
        </Card>
        <Card>
          <div className='card-item-container'>
            <div className='card-left-content'>
              <div className='card-label'>Active</div>
              <div className='card-description'>Leads/Contacts</div>
            </div>
            <div className='card-right-content'>25</div>
          </div>
        </Card>
      </div>
      <div className='leaderboard-container'>
        {DASHBOARD_LEADERBOARD_DATA.map(leaderboardItem =>
          renderLeaderBoard(leaderboardItem)
        )}
      </div>
      <div className='sales-container'>
        <SalesGraph />
      </div>
      <div className='tableContainer'>
        <div className='table-card'>
          <Card>
            <div className='card-head__header'>ACTIVE LEADS</div>
            <Table />
          </Card>
        </div>
        <div className='select-card'>
          <Card>
            <div className='card-head__header'>TO-DO LIST</div>
            <DashboardToDoList />
          </Card>
        </div>
      </div>
      <DashBoardActivity />
    </div>
  );
};

export default DashboardContent;
