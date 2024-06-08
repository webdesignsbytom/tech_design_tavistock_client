import React from 'react';
import { useNavigate } from 'react-router-dom';
// Icons
import { FaArrowCircleDown, FaCode } from 'react-icons/fa';
// Components
import PhoneDevices from '../devices/PhoneDevices';
import TabletDevices from '../devices/TabletDevices';
import DesktopDevices from '../devices/DesktopDevices';
// Images
import ArduinoDevice from '../../assets/images/tech/arduino.png';
import PiDevice from '../../assets/images/tech/raspberry_pi.png';
import ButtonComponent from '../global/ButtonComponent';

function HeaderComponent() {
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <header
      id='header'
      className='grid w-full h-full px-2 py-2 pb-2 pt-4 sm:pt-10 sm:pb-10 sm:px-10 sm:overflow-hidden'
    >
      {/* Down arrow */}
      <div className='hidden sm:grid absolute z-10 bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer'>
        <div
          title='See more web and app designs'
          className='text-alt-colour cursor-pointer hover:animate-pulse'
        >
          <a href='#information'>
            <FaArrowCircleDown size={40} />
          </a>
        </div>
      </div>

      {/* Main contents of header */}
      <div className='grid relative w-full h-full sm:overflow-hidden shadow-lg rounded-lg bg-white'>
        {/* Code icon */}
        <div className='absolute z-40 right-8 top-4'>
          <FaCode size={50} />
        </div>

        <div className='grid sm:grid-cols-2 w-full h-full overflow-hidden'>
          {/* Text display */}
          <section className='grid w-full h-full sm:overflow-hidden main__bg p-4 sm:px-4'>
            <div className='grid relative w-full h-full justify-center items-center justify-items-center'>
              <article className='grid w-fit -mt-1/2 h-fit px-16 py-8  outline outline-1 outline-gray-300 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-lg bg-white overflow-hidden russo-one-regular'>
                <section>
                  <div className='mb-2'>
                    <h1 className='text-5xl russo-one-regular'>
                      Tech Design <br /> <span className='italic'>by</span> Tom
                    </h1>
                  </div>
                  <div className='text-center font-medium mb-2'>
                    <h2 className=''>Web - Mobile - Desktop</h2>
                  </div>
                  <div className='text-center font-medium leading-5'>
                    <p>
                      Designing and developing modern apps and for{' '}
                      <span className='italic'>any</span> device.
                    </p>
                  </div>
                </section>

                <section className='grid pt-4 sm:pt-6'>
                  <div className='grid grid-cols-2 gap-2 overflow-hidden bg-white'>
                    <ButtonComponent
                      label='Learn More'
                      onClick={() => navigateToPage('/about')}
                      type='secondary'
                    />
                    <ButtonComponent
                      label='Contact Now'
                      onClick={() => navigateToPage('/contact')}
                      type='primary'
                    />
                  </div>
                </section>
              </article>
            </div>
          </section>

          {/* Tech display */}
          <section className='grid relative sm:overflow-hidden sm:pr-6 russo-one-regular'>
            <div className='grid relative grid-rows-2 animate-fade-in-move-up sm:overflow-hidden sm:pr-6'>
              <div className='grid items-center sm:-mb-16'>
                <section className='relative p-1 w-full h-fit sm:-mt-20'>
                  <div className='absolute z-30 right-0 sm:left-2 sm:top-4 w-[80px] h-[140px] sm:w-[108px] sm:h-[200px] sm:min-w-[108px] sm:min-h-[200px] sm:max-w-[108px] sm:max-h-[200px] overflow-hidden'>
                    <PhoneDevices />
                  </div>
                  <div className='hidden sm:grid absolute z-20 transform -mt-6 -translate-x-1/2 left-[35%] w-[240px] h-[140px] min-w-[240px] min-h-[140px] max-w-[240px] max-h-[140px] overflow-hidden'>
                    <TabletDevices />
                  </div>
                  <div className='absolute z-10 left-2 sm:left-1/2 -top-12 sm:top-0 w-[320px] h-[180px] min-w-[320px] min-h-[180px] max-w-[320px] max-h-[220px] xl:w-[345px] xl:h-[220px] xl:min-w-[345px] xl:min-h-[220px] xl:max-w-[345px] xl:max-h-[220px] overflow-hidden'>
                    <DesktopDevices />
                  </div>
                </section>
              </div>
              <div className='hidden sm:grid absolute z-40 mt-10 top-2 right-8'>
                <img
                  src={ArduinoDevice}
                  alt='Arduino'
                  className='w-28 h-28 object-contain'
                />
              </div>
              <div className='hidden sm:grid absolute bottom-8 left-20 mt-20 z-20'>
                <img
                  src={PiDevice}
                  alt='Raspberry Pi'
                  className='w-28 h-28 object-contain'
                />
              </div>
              <div className='circuit__bg opacity-50 absolute rotate-45 w-[350px] h-[350px] z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>

              <section className='grid z-20 w-full h-full justify-end items-end'>
                <article className='px-4 pt-10 pb-4 sm:px-6 sm:pt-6 sm:pb-6'>
                  <div className='grid justify-end py-4 leading-4'>
                    <ul className='grid gap-2 px-6 text-sm custom__list__style sm:justify-items-end sm:justify-end text-end'>
                      <li className='w-fit'>
                        <p>Afforable, quality code</p>
                      </li>
                      <li className='w-fit'>
                        <p>Robotics and sensory devices</p>
                      </li>
                      <li className='w-fit'>
                        <p>Interactive web and mobile games</p>
                      </li>
                      <li className='w-fit'>
                        <p>Bluetooth and wifi device connections</p>
                      </li>
                    </ul>
                  </div>
                  <div className='grid w-full h-fit'>
                    <ButtonComponent
                      label='SEE PORTFOLIO'
                      onClick={() => navigateToPage('/portfolio')}
                      type='primary'
                    />
                  </div>
                </article>
              </section>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
