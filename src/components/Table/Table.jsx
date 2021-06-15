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
    id: 1,
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    id: 2,
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Land Lord',
    id: 3,
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    id: 4,
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Seller',
    id: 5,
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    id: 6,
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    id: 7,
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Buyer',
    id: 8,
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  },
  {
    type: 'Land Lord',
    id: 9,
    leadName: 'Diese Ann',
    views: 153,
    favorites: 0,
    visit: '9:35 AM',
    date: '06/04/2021'
  }
];

const TableWithCustom = () => {
  return <Table k columns={columns} data={data} rowKey={({ id }) => id} />;
};

export default TableWithCustom;
