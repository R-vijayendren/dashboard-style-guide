import React from 'react';
import Card from '../../components/Card/Card';
import './Dashboard.scss';

const DashboardContent = () => {
  return (
    <div className='dashboard-content-wrapper'>
      <div className='dashboard-welcome-container'>
        <Card>Dashboard item</Card>
        <Card>Dashboard item</Card>
      </div>
    </div>
  );
};

export default DashboardContent;
