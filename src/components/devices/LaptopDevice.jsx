import React from 'react';

function LaptopDevice({ portfolioItem }) {
  return (
    <>
      <div className='grid items-center justify-center max-w-[350px] max-h-[290px]'>
        <div className='grid p-1 pt-3 bg-black rounded-tr-lg rounded-tl-lg border-2 border-solid border-gray-600 lg:h-[180px] lg:w-[300px] '>
          <div className='border-2 border-solid border-gray-600 overflow-hidden bg-black'>
            <img
              className='h-full w-full'
              src={portfolioItem.images[1]}
              alt='laptop display'
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <div className='grid min-h-[15px] items-center grid-cols-reg pl-8 rounded-tl-sm rounded-tr-sm rounded-bl-lg rounded-br-lg bg-black lg:w-[330px] border-2 border-solid border-gray-600 '>
        <div className='grid grid-flow-col gap-2'>
          <div className='h-[10px] w-[10px] border-2 border-solid border-gray-600 rounded-full bg-black'></div>
          <div className='h-[10px] w-[10px] border-2 border-solid border-gray-600 rounded-full bg-black'></div>
        </div>
      </div>
    </>
  );
}

export default LaptopDevice;
