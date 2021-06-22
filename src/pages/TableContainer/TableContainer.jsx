import React from 'react';

import './TableContainer.scss';

import Table from '../../components/Table/Table';

import Card from '../../components/Card/Card';
import DashboardToDoList from './DashboardToDoList';

const TableContainer = () => {
  return (
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
  );
};

export default TableContainer;
