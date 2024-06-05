import React from 'react';
import CatBG from '../../assets/images/pages/404cat.png';

function TabletDevices() {
  return (
    <div className='relative grid h-full w-full shadow-lg overflow-hidden'>
      <div className='relative grid bg-white w-full h-full border-4 border-solid border-alt-colour rounded-xl shadow-xl overflow-hidden'>
        {/* Phone display */}
        <div className='grid w-full h-full overflow-hidden'>
          <img
            src={CatBG}
            alt='lost cat'
            className='w-full h-full object-contain'
          />
        </div>

        {/* Front button */}
        <div className='absolute top-1/2 right-2 transform -translate-y-1/2 bottom-2 outline outline-1 outline-alt-colour rounded-full w-4 h-4'></div>
      </div>
      {/* Side buttons */}
      <div className='absolute left-4 -bottom-[2px] bg-alt-colour rounded-lg w-4 h-1'></div>

      <div className='absolute left-12 -bottom-[2px] bg-alt-colour rounded-lg w-4 h-1'></div>
      <div className='absolute left-16 -bottom-[2px]  bg-alt-colour rounded-lg w-4 h-1'></div>
    </div>
  );
}

export default TabletDevices;
