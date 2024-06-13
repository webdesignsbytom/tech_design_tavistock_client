import React from 'react';

function PhoneDevices({ portfolioItem }) {
  return (
    <div className='grid  w-full items-center justify-center'>
      <div className='bg-black grid h-[160px] w-[88px] rounded-lg p-1 border-2 border-solid border-gray-600'>
        <div className='bg-gray-600 relative overflow-hidden rounded-lg border-2 border-solid border-gray-600'>
          <img
            className='w-full h-full'
            src={portfolioItem.images[0]}
            alt='phone display'
          />
          <div className='grid absolute justify-center bottom-1 w-full'>
            <div className='h-[15px] w-[15px] border-2 border-solid border-gray-600 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneDevices;
