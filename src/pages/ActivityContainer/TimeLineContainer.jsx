import React from 'react';

const TimeLineContainer = () => {
  return (
    <div className='timeline-chart-container'>
      <div className='time-line'>
        <div className='red-line' />
        <div className='green-line' />
        <div className='blue-line' />
      </div>
      <div className='time-line__info'>
        <div className='red-line__info'>
          <div className='time_ago'>2 min ago</div>
          <div>
            Template Builder Access(Video tutorial inside Documentation)
          </div>
        </div>
        <div className='green-line__info'>
          <div className='time_ago'>2 min ago</div>
          <div>Designed the Wordpress theme lily created her account.</div>
        </div>
        <div className='blue-line__info'>
          <div className='time_ago'>2 min ago</div>
          <div>Your domain will expired in 13 days.</div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineContainer;
