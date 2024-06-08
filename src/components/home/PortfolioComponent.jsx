import React from 'react';
import { useNavigate } from 'react-router-dom';
// Utils
import { techDesignByTomData } from '../../utils/CompanyDataUtil';
// Components
import PhoneDevices from '../devices/PhoneDevices';
import DesktopDevices from '../devices/DesktopDevices';
import TabletDevices from '../devices/TabletDevices';
import ButtonComponent from '../global/ButtonComponent';

function PortfolioComponent() {
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };
  return (
    <section id='portfolio' className='grid h-screen w-full overflow-hidden'>
      <div className='grid h-full w-full bg-slate-400 overflow-hidden'>
        {/* Main content */}
        <div className='grid w-full h-full overflow-hidden'>
          <section className='grid items-center w-full h-full overflow-hidden py-6'>
            {/* Info Message  */}
            <section className='grid w-full h-full items-end overflow-hidden'>
              <div className='grid justify-center sm:items-end text-center justify-items-center w-full h-full'>
                <p className='text-base w-2/3'>
                  At{' '}
                  <span className='font-semibold'>
                    {techDesignByTomData.companyName}
                  </span>
                  , we specialize in delivering top-notch web and app
                  development, as well as innovative circuit solutions. Our
                  portfolio demonstrates our commitment to quality and
                  excellence in every project we undertake.
                </p>
              </div>
            </section>

            {/* Image display */}
            <div className='grid sm:grid-cols-displaySmall lg:grid-cols-display gap-4 w-full h-fit items-center bg-dark-colour py-8 px-2 sm:px-6'>
              <div className='hidden lg:grid w-full max-w-[100px] xl:max-w-[120px] h-[80%] items-center justify-center overflow-hidden shadow-2xl shadow-blue-500/40'>
                <PhoneDevices />
              </div>
              <div className='hidden sm:grid w-full h-full max-w-[200px] lg:max-w-[280px] max-h-[120px] xl:max-h-[180px] items-center justify-start overflow-hidden shadow-2xl shadow-blue-500/40'>
                <TabletDevices />
              </div>
              <div className='grid w-full min-w-[240px] h-full max-h-[260px] items-center overflow-hidden shadow-2xl shadow-blue-500/40'>
                <DesktopDevices />
              </div>
              <div className='hidden lg:grid w-full h-full max-w-[200px] lg:max-w-[280px] max-h-[120px] xl:max-h-[180px] items-start xl:items-center justify-start overflow-hidden shadow-2xl shadow-blue-500/40'>
                <TabletDevices />
              </div>
              <div className='hidden sm:grid w-full max-w-[100px] xl:max-w-[120px] h-[80%] items-center justify-center overflow-hidden shadow-2xl shadow-blue-500/40'>
                <PhoneDevices />
              </div>
            </div>

            {/* Cta button */}
            <section className='grid -mt-10'>
              <div className='grid px-2 sm:px-0 sm:justify-center w-full'>
                <div className='grid grid-cols-3 gap-2 w-full'>
                  <ButtonComponent
                    label='See Portfolio'
                    onClick={() => navigateToPage('/projects')}
                    type='primary'
                  />
                  <ButtonComponent
                    label='See Portfolio'
                    onClick={() => navigateToPage('/projects')}
                    type='primary'
                  />
                  <ButtonComponent
                    label='Contact Now'
                    onClick={() => navigateToPage('/contact')}
                    type='secondary'
                  />
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}

export default PortfolioComponent;
