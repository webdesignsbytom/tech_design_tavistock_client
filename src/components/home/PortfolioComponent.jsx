import React from 'react';
// Utils
import { techDesignByTomData } from '../../util/CompanyDataUtil';
import PhoneDevices from '../devices/PhoneDevices';
import DesktopDevices from '../devices/DesktopDevices';
import TabletDevices from '../devices/TabletDevices';

function PortfolioComponent() {
  return (
    <section id='portfolio' className='grid h-screen w-full overflow-hidden'>
      <div className='grid h-full w-full bg-slate-50 overflow-hidden'>
        {/* Main content */}
        <div className='grid grid-rows-reg w-full h-full overflow-hidden'>
          {/* Info Message - Left hand side */}
          <section className='grid w-full h-full overflow-hidden p-6'>
            <div className='grid justify-center text-center justify-items-center w-full h-full'>
              <p className='text-base mb-4 w-1/2'>
                At {techDesignByTomData.companyName}, we specialize in
                delivering top-notch web and app development, as well as
                innovative circuit solutions. Our portfolio demonstrates our
                commitment to quality and excellence in every project we
                undertake.
              </p>
              {/* <p className='text-lg'>
                Discover how our expertise can help transform your ideas into reality. We provide tailored solutions to meet the unique needs of each client, ensuring the highest standards of performance and reliability.
              </p>
              <p>
                Browse the many styles and design options we can create for you! We have made some great examples of our skills to help inspire your design!
              </p> */}
            </div>
          </section>
          {/* Sliding image display - Right hand side */}
          <section className='grid w-full h-full overflow-hidden p-6'>
            <div className='grid grid-cols-5 gap-2 w-full h-full bg-pink-600'>
              <div className='grid w-full h-full items-center justify-center bg-red-400'>
                <PhoneDevices />
              </div>
              <div className='grid w-full h-full items-start xl:items-center justify-start bg-green-400'>
                <TabletDevices />
              </div>
              <div className='grid w-full h-full items-center justify-center bg-orange-400'>
                <DesktopDevices />
              </div>
              <div className='grid w-full h-full items-end xl:items-center justify-end bg-purple-400'>
                <TabletDevices />
              </div>
              <div className='grid w-full h-full items-center justify-center bg-blue-400'>
                <PhoneDevices />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default PortfolioComponent;
