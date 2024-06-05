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
          <section className='grid w-full h-full overflow-hidden py-6'>
            <div className='grid grid-cols-display gap-4 w-full h-fit items-center bg-dark-colour py-8 px-6'>
              <div className='grid w-full max-w-[150px] h-[80%] items-center justify-center overflow-hidden shadow-2xl shadow-blue-500/40' >
                <PhoneDevices />
              </div>
              <div className='grid w-full h-full max-h-[180px] items-center justify-start overflow-hidden shadow-2xl shadow-blue-500/40'>
                <TabletDevices />
              </div>
              <div className='grid w-full min-w-[240px] h-full max-h-[260px] items-center overflow-hidden shadow-2xl shadow-blue-500/40'>
                <DesktopDevices />
              </div>
              <div className='grid w-full h-full max-h-[180px] items-start xl:items-center justify-start overflow-hidden shadow-2xl shadow-blue-500/40'>
                <TabletDevices />
              </div>
              <div className='grid w-full max-w-[150px] h-[80%] items-center justify-center overflow-hidden shadow-2xl shadow-blue-500/40'>
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
