import React from 'react';

function MonitorDevices({ portfolioItem }) {
  return (
    <>
      <div className='grid pt-2 max-w-[400px] max-h-[290px] pr-2 pl-2 grid-rows-rev bg-black rounded-lg border-2 border-solid border-gray-600'>
        <div className='bg-black rounded border-2 overflow-hidden border-solid border-gray-600'>
          <img
            className='w-full h-full'
            src={portfolioItem.images[2]}
            alt='phone display'
          />
        </div>
        <div className='grid grid-flow-col items-center py-1 pr-4 gap-2 justify-end'>
          <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
          <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
          <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
          <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
        </div>
      </div>
    </>
  );
}

export default MonitorDevices;
