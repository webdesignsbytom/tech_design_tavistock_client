import React from 'react';
import CatBG from '../../assets/images/pages/404cat.png';

function DesktopDevices() {
  return (
    <div id='pc-design' className='relative grid w-[320px] h-[180px] min-w-[320px] min-h-[180px] max-w-[320px] max-h-[180px] shadow-lg'>
      <div className='relative grid z-20 bg-white w-full h-full border-4 border-solid border-alt-colour rounded-sm shadow-xl overflow-hidden'>
        {/* PC display */}
        <div className='grid w-full h-full overflow-hidden'>
          <img
            src={CatBG}
            alt='lost cat'
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Stand */}
      <div
        id='pc-stand'
        className='absolute z-10 left-1/2 transform -translate-x-1/2 -bottom-2 bg-alt-colour rounded-lg w-8 h-8'
      ></div>
    </div>
  );
}

export default DesktopDevices;
