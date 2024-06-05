import React, { useState } from 'react';

function InfoBox({ data }) {
  const [dataSet] = useState(data);

  return (
    <div className='grid h-fit'>
      <div className='flex items-center bg-white p-4 shadow rounded-lg h-fit'>
        <div className='text-xl p-2 pr-4'>{dataSet.imageUrl}</div>
        <div>
          <h4 className='text-xl font-bold'>{dataSet.title}</h4>
          <p>{dataSet.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
