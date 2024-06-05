import React from 'react';
import CatBG from '../../assets/images/pages/404cat.png';

function PhoneDevices() {
  return (
    <div className='relative grid h-full w-full shadow-lg'>
      <div className='relative grid bg-white w-full h-full border-4 border-solid border-alt-colour rounded-xl shadow-xl overflow-hidden'>
        {/* Phone display */}
        <div className='grid w-full h-full overflow-hidden'>
          <img
            src={CatBG}
            alt='lost cat'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Front button */}
        <div className='absolute left-1/2 transform -translate-x-1/2 bottom-2 outline outline-1 outline-alt-colour rounded-full w-4 h-4'></div>
      </div>
      {/* Side buttons */}
      <div className='absolute -left-[2px] top-4 bg-alt-colour rounded-lg w-1 h-4'></div>

      <div className='absolute -left-[2px] top-8 bg-alt-colour rounded-lg w-1 h-4'></div>
      <div className='absolute -left-[2px] top-16 bg-alt-colour rounded-lg w-1 h-4'></div>
    </div>
  );
}

export default PhoneDevices;
