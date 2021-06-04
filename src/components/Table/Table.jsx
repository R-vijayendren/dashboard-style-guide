import Table from 'rc-table';

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 100,
    align: 'left',
    render: data => (
      <div
        style={
          data === 'Land Lord'
            ? { color: '#00C49F' }
            : data === 'Seller'
            ? { color: '#FFBB28' }
            : { color: '#0088FE' }
        }
      >
        {data}
      </div>
    )
  },
  {
    title: 'Lead Name',
    dataIndex: 'leadName',
    key: 'leadName',
    width: 100,
    align: 'left',
    render: data => (
      <div
        style={{
          height: '22px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {data}
      </div>
    )
  },
  {
    title: 'Views',
    dataIndex: 'views',
    key: 'views',
    align: 'left',
    width: 100
  },
  {
    title: 'Favorites',
    dataIndex: 'favorites',
    key: 'favorites',
    align: 'left',
    width: 100
  },
  {
    title: 'Last Visit',
    dataIndex: 'visit',
    key: 'visit',
    align: 'left',
    width: 100
  },
  {
    title: 'Last Action',
    dataIndex: 'date',
    align: 'left',
    key: 'date',
    width: 100
  }
];

const data = [
  {
    type: 'Buyer',
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Land Lord',
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Seller',
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Land Lord',
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  }
];

const TableWithCustom = () => {
  return <Table cl columns={columns} data={data} />;
};

export default TableWithCustom;
