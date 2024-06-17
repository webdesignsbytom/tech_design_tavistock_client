import React from 'react';

function ComponentTitles({ title, subtitle }) {
  return (
    <div className='grid h-fit'>
      <div className='text-center'>
        <span className='text-sm font-semibold dark:text-dark-text-light'>{subtitle}</span>
      </div>
      <h3 className='poppins_title text-5xl text-purple-main dark:text-purple-dark text-center'>
        {title}
      </h3>
    </div>
  );
}

export default ComponentTitles;
