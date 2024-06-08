import React, { useState } from 'react';

function InfoBox({ data, index }) {
  const [dataSet] = useState(data);

  return (
    <div id={index + '_infoBox'} className='grid h-fit hidden-container'>
      <div className='flex items-center bg-white p-4 shadow rounded-lg h-fit hover:bg-alt-colour hover:text-white duration-300'>
        <div className='lg:text-xl p-2 pr-4'>{dataSet.imageUrl}</div>
        <div>
          <h4 className='text-base lg:text-xl font-bold'>{dataSet.title}</h4>
          <p className='text-sm lg:text-base'>{dataSet.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
