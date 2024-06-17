import React, { useState } from 'react';

function InfoBox({ data, index }) {
  const [dataSet] = useState(data);

  return (
    <div id={index + '_infoBox'} className='grid h-fit hidden-container'>
      <div className='grid grid-cols-reg gap-2 lg:gap-6 lg:pr-2 items-center bg-white dark:bg-dark-main-bg dark:text-dark-text-light p-4 shadow rounded-lg h-fit hover:bg-alt-colour hover:text-white duration-300'>
        <div className='text-xl'>{dataSet.imageUrl}</div>
        <div>
          <h4 className='text-base lg:text-xl font-bold'>{dataSet.title}</h4>
          <p className='text-sm lg:text-base leading-5'>{dataSet.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
