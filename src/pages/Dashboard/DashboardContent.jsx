import React from 'react';
import Card from '../../components/Card/Card';
import './Dashboard.scss';

const DashboardContent = () => {
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
    </div>
  );
};

export default DashboardContent;
